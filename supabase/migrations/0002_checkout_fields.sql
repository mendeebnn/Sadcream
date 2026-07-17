alter table public.customers alter column email drop not null;
alter table public.customers add column if not exists notes text not null default '';
alter table public.orders drop constraint if exists orders_status_check;
alter table public.orders add constraint orders_status_check check (status in ('pending_verification','payment_submitted','approved','rejected','completed'));
