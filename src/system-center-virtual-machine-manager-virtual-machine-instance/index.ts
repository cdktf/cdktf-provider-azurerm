/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#custom_location_id SystemCenterVirtualMachineManagerVirtualMachineInstance#custom_location_id}
  */
  readonly customLocationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#id SystemCenterVirtualMachineManagerVirtualMachineInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#scoped_resource_id SystemCenterVirtualMachineManagerVirtualMachineInstance#scoped_resource_id}
  */
  readonly scopedResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#system_center_virtual_machine_manager_availability_set_ids SystemCenterVirtualMachineManagerVirtualMachineInstance#system_center_virtual_machine_manager_availability_set_ids}
  */
  readonly systemCenterVirtualMachineManagerAvailabilitySetIds?: string[];
  /**
  * hardware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#hardware SystemCenterVirtualMachineManagerVirtualMachineInstance#hardware}
  */
  readonly hardware?: SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#infrastructure SystemCenterVirtualMachineManagerVirtualMachineInstance#infrastructure}
  */
  readonly infrastructure: SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#network_interface SystemCenterVirtualMachineManagerVirtualMachineInstance#network_interface}
  */
  readonly networkInterface?: SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface[] | cdktf.IResolvable;
  /**
  * operating_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#operating_system SystemCenterVirtualMachineManagerVirtualMachineInstance#operating_system}
  */
  readonly operatingSystem?: SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem;
  /**
  * storage_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#storage_disk SystemCenterVirtualMachineManagerVirtualMachineInstance#storage_disk}
  */
  readonly storageDisk?: SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#timeouts SystemCenterVirtualMachineManagerVirtualMachineInstance#timeouts}
  */
  readonly timeouts?: SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts;
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#cpu_count SystemCenterVirtualMachineManagerVirtualMachineInstance#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#dynamic_memory_max_in_mb SystemCenterVirtualMachineManagerVirtualMachineInstance#dynamic_memory_max_in_mb}
  */
  readonly dynamicMemoryMaxInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#dynamic_memory_min_in_mb SystemCenterVirtualMachineManagerVirtualMachineInstance#dynamic_memory_min_in_mb}
  */
  readonly dynamicMemoryMinInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#limit_cpu_for_migration_enabled SystemCenterVirtualMachineManagerVirtualMachineInstance#limit_cpu_for_migration_enabled}
  */
  readonly limitCpuForMigrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#memory_in_mb SystemCenterVirtualMachineManagerVirtualMachineInstance#memory_in_mb}
  */
  readonly memoryInMb?: number;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceHardwareToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceHardwareOutputReference | SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    dynamic_memory_max_in_mb: cdktf.numberToTerraform(struct!.dynamicMemoryMaxInMb),
    dynamic_memory_min_in_mb: cdktf.numberToTerraform(struct!.dynamicMemoryMinInMb),
    limit_cpu_for_migration_enabled: cdktf.booleanToTerraform(struct!.limitCpuForMigrationEnabled),
    memory_in_mb: cdktf.numberToTerraform(struct!.memoryInMb),
  }
}


export function systemCenterVirtualMachineManagerVirtualMachineInstanceHardwareToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceHardwareOutputReference | SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_memory_max_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.dynamicMemoryMaxInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_memory_min_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.dynamicMemoryMinInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_cpu_for_migration_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.limitCpuForMigrationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceHardwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._dynamicMemoryMaxInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMemoryMaxInMb = this._dynamicMemoryMaxInMb;
    }
    if (this._dynamicMemoryMinInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMemoryMinInMb = this._dynamicMemoryMinInMb;
    }
    if (this._limitCpuForMigrationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpuForMigrationEnabled = this._limitCpuForMigrationEnabled;
    }
    if (this._memoryInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInMb = this._memoryInMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._dynamicMemoryMaxInMb = undefined;
      this._dynamicMemoryMinInMb = undefined;
      this._limitCpuForMigrationEnabled = undefined;
      this._memoryInMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._dynamicMemoryMaxInMb = value.dynamicMemoryMaxInMb;
      this._dynamicMemoryMinInMb = value.dynamicMemoryMinInMb;
      this._limitCpuForMigrationEnabled = value.limitCpuForMigrationEnabled;
      this._memoryInMb = value.memoryInMb;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // dynamic_memory_max_in_mb - computed: false, optional: true, required: false
  private _dynamicMemoryMaxInMb?: number; 
  public get dynamicMemoryMaxInMb() {
    return this.getNumberAttribute('dynamic_memory_max_in_mb');
  }
  public set dynamicMemoryMaxInMb(value: number) {
    this._dynamicMemoryMaxInMb = value;
  }
  public resetDynamicMemoryMaxInMb() {
    this._dynamicMemoryMaxInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMemoryMaxInMbInput() {
    return this._dynamicMemoryMaxInMb;
  }

  // dynamic_memory_min_in_mb - computed: false, optional: true, required: false
  private _dynamicMemoryMinInMb?: number; 
  public get dynamicMemoryMinInMb() {
    return this.getNumberAttribute('dynamic_memory_min_in_mb');
  }
  public set dynamicMemoryMinInMb(value: number) {
    this._dynamicMemoryMinInMb = value;
  }
  public resetDynamicMemoryMinInMb() {
    this._dynamicMemoryMinInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMemoryMinInMbInput() {
    return this._dynamicMemoryMinInMb;
  }

  // limit_cpu_for_migration_enabled - computed: false, optional: true, required: false
  private _limitCpuForMigrationEnabled?: boolean | cdktf.IResolvable; 
  public get limitCpuForMigrationEnabled() {
    return this.getBooleanAttribute('limit_cpu_for_migration_enabled');
  }
  public set limitCpuForMigrationEnabled(value: boolean | cdktf.IResolvable) {
    this._limitCpuForMigrationEnabled = value;
  }
  public resetLimitCpuForMigrationEnabled() {
    this._limitCpuForMigrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuForMigrationEnabledInput() {
    return this._limitCpuForMigrationEnabled;
  }

  // memory_in_mb - computed: false, optional: true, required: false
  private _memoryInMb?: number; 
  public get memoryInMb() {
    return this.getNumberAttribute('memory_in_mb');
  }
  public set memoryInMb(value: number) {
    this._memoryInMb = value;
  }
  public resetMemoryInMb() {
    this._memoryInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInMbInput() {
    return this._memoryInMb;
  }
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#checkpoint_type SystemCenterVirtualMachineManagerVirtualMachineInstance#checkpoint_type}
  */
  readonly checkpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#system_center_virtual_machine_manager_cloud_id SystemCenterVirtualMachineManagerVirtualMachineInstance#system_center_virtual_machine_manager_cloud_id}
  */
  readonly systemCenterVirtualMachineManagerCloudId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#system_center_virtual_machine_manager_inventory_item_id SystemCenterVirtualMachineManagerVirtualMachineInstance#system_center_virtual_machine_manager_inventory_item_id}
  */
  readonly systemCenterVirtualMachineManagerInventoryItemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#system_center_virtual_machine_manager_template_id SystemCenterVirtualMachineManagerVirtualMachineInstance#system_center_virtual_machine_manager_template_id}
  */
  readonly systemCenterVirtualMachineManagerTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#system_center_virtual_machine_manager_virtual_machine_server_id SystemCenterVirtualMachineManagerVirtualMachineInstance#system_center_virtual_machine_manager_virtual_machine_server_id}
  */
  readonly systemCenterVirtualMachineManagerVirtualMachineServerId?: string;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureOutputReference | SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkpoint_type: cdktf.stringToTerraform(struct!.checkpointType),
    system_center_virtual_machine_manager_cloud_id: cdktf.stringToTerraform(struct!.systemCenterVirtualMachineManagerCloudId),
    system_center_virtual_machine_manager_inventory_item_id: cdktf.stringToTerraform(struct!.systemCenterVirtualMachineManagerInventoryItemId),
    system_center_virtual_machine_manager_template_id: cdktf.stringToTerraform(struct!.systemCenterVirtualMachineManagerTemplateId),
    system_center_virtual_machine_manager_virtual_machine_server_id: cdktf.stringToTerraform(struct!.systemCenterVirtualMachineManagerVirtualMachineServerId),
  }
}


export function systemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureOutputReference | SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.checkpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_center_virtual_machine_manager_cloud_id: {
      value: cdktf.stringToHclTerraform(struct!.systemCenterVirtualMachineManagerCloudId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_center_virtual_machine_manager_inventory_item_id: {
      value: cdktf.stringToHclTerraform(struct!.systemCenterVirtualMachineManagerInventoryItemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_center_virtual_machine_manager_template_id: {
      value: cdktf.stringToHclTerraform(struct!.systemCenterVirtualMachineManagerTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_center_virtual_machine_manager_virtual_machine_server_id: {
      value: cdktf.stringToHclTerraform(struct!.systemCenterVirtualMachineManagerVirtualMachineServerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointType = this._checkpointType;
    }
    if (this._systemCenterVirtualMachineManagerCloudId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCenterVirtualMachineManagerCloudId = this._systemCenterVirtualMachineManagerCloudId;
    }
    if (this._systemCenterVirtualMachineManagerInventoryItemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCenterVirtualMachineManagerInventoryItemId = this._systemCenterVirtualMachineManagerInventoryItemId;
    }
    if (this._systemCenterVirtualMachineManagerTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCenterVirtualMachineManagerTemplateId = this._systemCenterVirtualMachineManagerTemplateId;
    }
    if (this._systemCenterVirtualMachineManagerVirtualMachineServerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCenterVirtualMachineManagerVirtualMachineServerId = this._systemCenterVirtualMachineManagerVirtualMachineServerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkpointType = undefined;
      this._systemCenterVirtualMachineManagerCloudId = undefined;
      this._systemCenterVirtualMachineManagerInventoryItemId = undefined;
      this._systemCenterVirtualMachineManagerTemplateId = undefined;
      this._systemCenterVirtualMachineManagerVirtualMachineServerId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkpointType = value.checkpointType;
      this._systemCenterVirtualMachineManagerCloudId = value.systemCenterVirtualMachineManagerCloudId;
      this._systemCenterVirtualMachineManagerInventoryItemId = value.systemCenterVirtualMachineManagerInventoryItemId;
      this._systemCenterVirtualMachineManagerTemplateId = value.systemCenterVirtualMachineManagerTemplateId;
      this._systemCenterVirtualMachineManagerVirtualMachineServerId = value.systemCenterVirtualMachineManagerVirtualMachineServerId;
    }
  }

  // checkpoint_type - computed: false, optional: true, required: false
  private _checkpointType?: string; 
  public get checkpointType() {
    return this.getStringAttribute('checkpoint_type');
  }
  public set checkpointType(value: string) {
    this._checkpointType = value;
  }
  public resetCheckpointType() {
    this._checkpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointTypeInput() {
    return this._checkpointType;
  }

  // system_center_virtual_machine_manager_cloud_id - computed: false, optional: true, required: false
  private _systemCenterVirtualMachineManagerCloudId?: string; 
  public get systemCenterVirtualMachineManagerCloudId() {
    return this.getStringAttribute('system_center_virtual_machine_manager_cloud_id');
  }
  public set systemCenterVirtualMachineManagerCloudId(value: string) {
    this._systemCenterVirtualMachineManagerCloudId = value;
  }
  public resetSystemCenterVirtualMachineManagerCloudId() {
    this._systemCenterVirtualMachineManagerCloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCenterVirtualMachineManagerCloudIdInput() {
    return this._systemCenterVirtualMachineManagerCloudId;
  }

  // system_center_virtual_machine_manager_inventory_item_id - computed: false, optional: true, required: false
  private _systemCenterVirtualMachineManagerInventoryItemId?: string; 
  public get systemCenterVirtualMachineManagerInventoryItemId() {
    return this.getStringAttribute('system_center_virtual_machine_manager_inventory_item_id');
  }
  public set systemCenterVirtualMachineManagerInventoryItemId(value: string) {
    this._systemCenterVirtualMachineManagerInventoryItemId = value;
  }
  public resetSystemCenterVirtualMachineManagerInventoryItemId() {
    this._systemCenterVirtualMachineManagerInventoryItemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCenterVirtualMachineManagerInventoryItemIdInput() {
    return this._systemCenterVirtualMachineManagerInventoryItemId;
  }

  // system_center_virtual_machine_manager_template_id - computed: false, optional: true, required: false
  private _systemCenterVirtualMachineManagerTemplateId?: string; 
  public get systemCenterVirtualMachineManagerTemplateId() {
    return this.getStringAttribute('system_center_virtual_machine_manager_template_id');
  }
  public set systemCenterVirtualMachineManagerTemplateId(value: string) {
    this._systemCenterVirtualMachineManagerTemplateId = value;
  }
  public resetSystemCenterVirtualMachineManagerTemplateId() {
    this._systemCenterVirtualMachineManagerTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCenterVirtualMachineManagerTemplateIdInput() {
    return this._systemCenterVirtualMachineManagerTemplateId;
  }

  // system_center_virtual_machine_manager_virtual_machine_server_id - computed: false, optional: true, required: false
  private _systemCenterVirtualMachineManagerVirtualMachineServerId?: string; 
  public get systemCenterVirtualMachineManagerVirtualMachineServerId() {
    return this.getStringAttribute('system_center_virtual_machine_manager_virtual_machine_server_id');
  }
  public set systemCenterVirtualMachineManagerVirtualMachineServerId(value: string) {
    this._systemCenterVirtualMachineManagerVirtualMachineServerId = value;
  }
  public resetSystemCenterVirtualMachineManagerVirtualMachineServerId() {
    this._systemCenterVirtualMachineManagerVirtualMachineServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCenterVirtualMachineManagerVirtualMachineServerIdInput() {
    return this._systemCenterVirtualMachineManagerVirtualMachineServerId;
  }
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#ipv4_address_type SystemCenterVirtualMachineManagerVirtualMachineInstance#ipv4_address_type}
  */
  readonly ipv4AddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#ipv6_address_type SystemCenterVirtualMachineManagerVirtualMachineInstance#ipv6_address_type}
  */
  readonly ipv6AddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#mac_address_type SystemCenterVirtualMachineManagerVirtualMachineInstance#mac_address_type}
  */
  readonly macAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#name SystemCenterVirtualMachineManagerVirtualMachineInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#virtual_network_id SystemCenterVirtualMachineManagerVirtualMachineInstance#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address_type: cdktf.stringToTerraform(struct!.ipv4AddressType),
    ipv6_address_type: cdktf.stringToTerraform(struct!.ipv6AddressType),
    mac_address_type: cdktf.stringToTerraform(struct!.macAddressType),
    name: cdktf.stringToTerraform(struct!.name),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}


export function systemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_type: {
      value: cdktf.stringToHclTerraform(struct!.macAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressType = this._ipv4AddressType;
    }
    if (this._ipv6AddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressType = this._ipv6AddressType;
    }
    if (this._macAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressType = this._macAddressType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4AddressType = undefined;
      this._ipv6AddressType = undefined;
      this._macAddressType = undefined;
      this._name = undefined;
      this._virtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4AddressType = value.ipv4AddressType;
      this._ipv6AddressType = value.ipv6AddressType;
      this._macAddressType = value.macAddressType;
      this._name = value.name;
      this._virtualNetworkId = value.virtualNetworkId;
    }
  }

  // ipv4_address_type - computed: false, optional: true, required: false
  private _ipv4AddressType?: string; 
  public get ipv4AddressType() {
    return this.getStringAttribute('ipv4_address_type');
  }
  public set ipv4AddressType(value: string) {
    this._ipv4AddressType = value;
  }
  public resetIpv4AddressType() {
    this._ipv4AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressTypeInput() {
    return this._ipv4AddressType;
  }

  // ipv6_address_type - computed: false, optional: true, required: false
  private _ipv6AddressType?: string; 
  public get ipv6AddressType() {
    return this.getStringAttribute('ipv6_address_type');
  }
  public set ipv6AddressType(value: string) {
    this._ipv6AddressType = value;
  }
  public resetIpv6AddressType() {
    this._ipv6AddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressTypeInput() {
    return this._ipv6AddressType;
  }

  // mac_address_type - computed: false, optional: true, required: false
  private _macAddressType?: string; 
  public get macAddressType() {
    return this.getStringAttribute('mac_address_type');
  }
  public set macAddressType(value: string) {
    this._macAddressType = value;
  }
  public resetMacAddressType() {
    this._macAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressTypeInput() {
    return this._macAddressType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceOutputReference {
    return new SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#admin_password SystemCenterVirtualMachineManagerVirtualMachineInstance#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#computer_name SystemCenterVirtualMachineManagerVirtualMachineInstance#computer_name}
  */
  readonly computerName?: string;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemOutputReference | SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    computer_name: cdktf.stringToTerraform(struct!.computerName),
  }
}


export function systemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemOutputReference | SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    computer_name: {
      value: cdktf.stringToHclTerraform(struct!.computerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._computerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerName = this._computerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminPassword = undefined;
      this._computerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminPassword = value.adminPassword;
      this._computerName = value.computerName;
    }
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // computer_name - computed: false, optional: true, required: false
  private _computerName?: string; 
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }
  public set computerName(value: string) {
    this._computerName = value;
  }
  public resetComputerName() {
    this._computerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameInput() {
    return this._computerName;
  }
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#bus SystemCenterVirtualMachineManagerVirtualMachineInstance#bus}
  */
  readonly bus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#bus_type SystemCenterVirtualMachineManagerVirtualMachineInstance#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#disk_size_gb SystemCenterVirtualMachineManagerVirtualMachineInstance#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#lun SystemCenterVirtualMachineManagerVirtualMachineInstance#lun}
  */
  readonly lun?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#name SystemCenterVirtualMachineManagerVirtualMachineInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#storage_qos_policy_name SystemCenterVirtualMachineManagerVirtualMachineInstance#storage_qos_policy_name}
  */
  readonly storageQosPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#template_disk_id SystemCenterVirtualMachineManagerVirtualMachineInstance#template_disk_id}
  */
  readonly templateDiskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#vhd_type SystemCenterVirtualMachineManagerVirtualMachineInstance#vhd_type}
  */
  readonly vhdType?: string;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.numberToTerraform(struct!.bus),
    bus_type: cdktf.stringToTerraform(struct!.busType),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    name: cdktf.stringToTerraform(struct!.name),
    storage_qos_policy_name: cdktf.stringToTerraform(struct!.storageQosPolicyName),
    template_disk_id: cdktf.stringToTerraform(struct!.templateDiskId),
    vhd_type: cdktf.stringToTerraform(struct!.vhdType),
  }
}


export function systemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.numberToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_qos_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storageQosPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_disk_id: {
      value: cdktf.stringToHclTerraform(struct!.templateDiskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vhd_type: {
      value: cdktf.stringToHclTerraform(struct!.vhdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageQosPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageQosPolicyName = this._storageQosPolicyName;
    }
    if (this._templateDiskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDiskId = this._templateDiskId;
    }
    if (this._vhdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhdType = this._vhdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._busType = undefined;
      this._diskSizeGb = undefined;
      this._lun = undefined;
      this._name = undefined;
      this._storageQosPolicyName = undefined;
      this._templateDiskId = undefined;
      this._vhdType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._busType = value.busType;
      this._diskSizeGb = value.diskSizeGb;
      this._lun = value.lun;
      this._name = value.name;
      this._storageQosPolicyName = value.storageQosPolicyName;
      this._templateDiskId = value.templateDiskId;
      this._vhdType = value.vhdType;
    }
  }

  // bus - computed: false, optional: true, required: false
  private _bus?: number; 
  public get bus() {
    return this.getNumberAttribute('bus');
  }
  public set bus(value: number) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // bus_type - computed: false, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // storage_qos_policy_name - computed: false, optional: true, required: false
  private _storageQosPolicyName?: string; 
  public get storageQosPolicyName() {
    return this.getStringAttribute('storage_qos_policy_name');
  }
  public set storageQosPolicyName(value: string) {
    this._storageQosPolicyName = value;
  }
  public resetStorageQosPolicyName() {
    this._storageQosPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQosPolicyNameInput() {
    return this._storageQosPolicyName;
  }

  // template_disk_id - computed: false, optional: true, required: false
  private _templateDiskId?: string; 
  public get templateDiskId() {
    return this.getStringAttribute('template_disk_id');
  }
  public set templateDiskId(value: string) {
    this._templateDiskId = value;
  }
  public resetTemplateDiskId() {
    this._templateDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDiskIdInput() {
    return this._templateDiskId;
  }

  // vhd_type - computed: false, optional: true, required: false
  private _vhdType?: string; 
  public get vhdType() {
    return this.getStringAttribute('vhd_type');
  }
  public set vhdType(value: string) {
    this._vhdType = value;
  }
  public resetVhdType() {
    this._vhdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdTypeInput() {
    return this._vhdType;
  }
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskList extends cdktf.ComplexList {
  public internalValue? : SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskOutputReference {
    return new SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#create SystemCenterVirtualMachineManagerVirtualMachineInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#delete SystemCenterVirtualMachineManagerVirtualMachineInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#read SystemCenterVirtualMachineManagerVirtualMachineInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#update SystemCenterVirtualMachineManagerVirtualMachineInstance#update}
  */
  readonly update?: string;
}

export function systemCenterVirtualMachineManagerVirtualMachineInstanceTimeoutsToTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function systemCenterVirtualMachineManagerVirtualMachineInstanceTimeoutsToHclTerraform(struct?: SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance azurerm_system_center_virtual_machine_manager_virtual_machine_instance}
*/
export class SystemCenterVirtualMachineManagerVirtualMachineInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_system_center_virtual_machine_manager_virtual_machine_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCenterVirtualMachineManagerVirtualMachineInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCenterVirtualMachineManagerVirtualMachineInstance to import
  * @param importFromId The id of the existing SystemCenterVirtualMachineManagerVirtualMachineInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCenterVirtualMachineManagerVirtualMachineInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_system_center_virtual_machine_manager_virtual_machine_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/system_center_virtual_machine_manager_virtual_machine_instance azurerm_system_center_virtual_machine_manager_virtual_machine_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCenterVirtualMachineManagerVirtualMachineInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCenterVirtualMachineManagerVirtualMachineInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_system_center_virtual_machine_manager_virtual_machine_instance',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customLocationId = config.customLocationId;
    this._id = config.id;
    this._scopedResourceId = config.scopedResourceId;
    this._systemCenterVirtualMachineManagerAvailabilitySetIds = config.systemCenterVirtualMachineManagerAvailabilitySetIds;
    this._hardware.internalValue = config.hardware;
    this._infrastructure.internalValue = config.infrastructure;
    this._networkInterface.internalValue = config.networkInterface;
    this._operatingSystem.internalValue = config.operatingSystem;
    this._storageDisk.internalValue = config.storageDisk;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_location_id - computed: false, optional: false, required: true
  private _customLocationId?: string; 
  public get customLocationId() {
    return this.getStringAttribute('custom_location_id');
  }
  public set customLocationId(value: string) {
    this._customLocationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLocationIdInput() {
    return this._customLocationId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // scoped_resource_id - computed: false, optional: false, required: true
  private _scopedResourceId?: string; 
  public get scopedResourceId() {
    return this.getStringAttribute('scoped_resource_id');
  }
  public set scopedResourceId(value: string) {
    this._scopedResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopedResourceIdInput() {
    return this._scopedResourceId;
  }

  // system_center_virtual_machine_manager_availability_set_ids - computed: false, optional: true, required: false
  private _systemCenterVirtualMachineManagerAvailabilitySetIds?: string[]; 
  public get systemCenterVirtualMachineManagerAvailabilitySetIds() {
    return this.getListAttribute('system_center_virtual_machine_manager_availability_set_ids');
  }
  public set systemCenterVirtualMachineManagerAvailabilitySetIds(value: string[]) {
    this._systemCenterVirtualMachineManagerAvailabilitySetIds = value;
  }
  public resetSystemCenterVirtualMachineManagerAvailabilitySetIds() {
    this._systemCenterVirtualMachineManagerAvailabilitySetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCenterVirtualMachineManagerAvailabilitySetIdsInput() {
    return this._systemCenterVirtualMachineManagerAvailabilitySetIds;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware = new SystemCenterVirtualMachineManagerVirtualMachineInstanceHardwareOutputReference(this, "hardware");
  public get hardware() {
    return this._hardware;
  }
  public putHardware(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceHardware) {
    this._hardware.internalValue = value;
  }
  public resetHardware() {
    this._hardware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware.internalValue;
  }

  // infrastructure - computed: false, optional: false, required: true
  private _infrastructure = new SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem = new SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemOutputReference(this, "operating_system");
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public putOperatingSystem(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystem) {
    this._operatingSystem.internalValue = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem.internalValue;
  }

  // storage_disk - computed: false, optional: true, required: false
  private _storageDisk = new SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskList(this, "storage_disk", false);
  public get storageDisk() {
    return this._storageDisk;
  }
  public putStorageDisk(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDisk[] | cdktf.IResolvable) {
    this._storageDisk.internalValue = value;
  }
  public resetStorageDisk() {
    this._storageDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDiskInput() {
    return this._storageDisk.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_location_id: cdktf.stringToTerraform(this._customLocationId),
      id: cdktf.stringToTerraform(this._id),
      scoped_resource_id: cdktf.stringToTerraform(this._scopedResourceId),
      system_center_virtual_machine_manager_availability_set_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemCenterVirtualMachineManagerAvailabilitySetIds),
      hardware: systemCenterVirtualMachineManagerVirtualMachineInstanceHardwareToTerraform(this._hardware.internalValue),
      infrastructure: systemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureToTerraform(this._infrastructure.internalValue),
      network_interface: cdktf.listMapper(systemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      operating_system: systemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemToTerraform(this._operatingSystem.internalValue),
      storage_disk: cdktf.listMapper(systemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskToTerraform, true)(this._storageDisk.internalValue),
      timeouts: systemCenterVirtualMachineManagerVirtualMachineInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_location_id: {
        value: cdktf.stringToHclTerraform(this._customLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scoped_resource_id: {
        value: cdktf.stringToHclTerraform(this._scopedResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_center_virtual_machine_manager_availability_set_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemCenterVirtualMachineManagerAvailabilitySetIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hardware: {
        value: systemCenterVirtualMachineManagerVirtualMachineInstanceHardwareToHclTerraform(this._hardware.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceHardwareList",
      },
      infrastructure: {
        value: systemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureToHclTerraform(this._infrastructure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceInfrastructureList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(systemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceNetworkInterfaceList",
      },
      operating_system: {
        value: systemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemToHclTerraform(this._operatingSystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceOperatingSystemList",
      },
      storage_disk: {
        value: cdktf.listMapperHcl(systemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskToHclTerraform, true)(this._storageDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceStorageDiskList",
      },
      timeouts: {
        value: systemCenterVirtualMachineManagerVirtualMachineInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemCenterVirtualMachineManagerVirtualMachineInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
