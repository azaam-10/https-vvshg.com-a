
import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface FeatureItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  bgColor: string;
}