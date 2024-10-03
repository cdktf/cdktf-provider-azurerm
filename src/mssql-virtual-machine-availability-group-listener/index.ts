// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlVirtualMachineAvailabilityGroupListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#availability_group_name MssqlVirtualMachineAvailabilityGroupListener#availability_group_name}
  */
  readonly availabilityGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#id MssqlVirtualMachineAvailabilityGroupListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#name MssqlVirtualMachineAvailabilityGroupListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#port MssqlVirtualMachineAvailabilityGroupListener#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_group_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_group_id}
  */
  readonly sqlVirtualMachineGroupId: string;
  /**
  * load_balancer_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_configuration MssqlVirtualMachineAvailabilityGroupListener#load_balancer_configuration}
  */
  readonly loadBalancerConfiguration?: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration;
  /**
  * multi_subnet_ip_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#multi_subnet_ip_configuration MssqlVirtualMachineAvailabilityGroupListener#multi_subnet_ip_configuration}
  */
  readonly multiSubnetIpConfiguration?: MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[] | cdktf.IResolvable;
  /**
  * replica block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#replica MssqlVirtualMachineAvailabilityGroupListener#replica}
  */
  readonly replica: MssqlVirtualMachineAvailabilityGroupListenerReplica[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#timeouts MssqlVirtualMachineAvailabilityGroupListener#timeouts}
  */
  readonly timeouts?: MssqlVirtualMachineAvailabilityGroupListenerTimeouts;
}
export interface MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#load_balancer_id MssqlVirtualMachineAvailabilityGroupListener#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}
  */
  readonly privateIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#probe_port MssqlVirtualMachineAvailabilityGroupListener#probe_port}
  */
  readonly probePort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_ids MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_ids}
  */
  readonly sqlVirtualMachineIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}
  */
  readonly subnetId: string;
}

export function mssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationToTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference | MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    probe_port: cdktf.numberToTerraform(struct!.probePort),
    sql_virtual_machine_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sqlVirtualMachineIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function mssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationToHclTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference | MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_port: {
      value: cdktf.numberToHclTerraform(struct!.probePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_virtual_machine_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sqlVirtualMachineIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._probePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePort = this._probePort;
    }
    if (this._sqlVirtualMachineIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlVirtualMachineIds = this._sqlVirtualMachineIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancerId = undefined;
      this._privateIpAddress = undefined;
      this._probePort = undefined;
      this._sqlVirtualMachineIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancerId = value.loadBalancerId;
      this._privateIpAddress = value.privateIpAddress;
      this._probePort = value.probePort;
      this._sqlVirtualMachineIds = value.sqlVirtualMachineIds;
      this._subnetId = value.subnetId;
    }
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // private_ip_address - computed: false, optional: false, required: true
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // probe_port - computed: false, optional: false, required: true
  private _probePort?: number; 
  public get probePort() {
    return this.getNumberAttribute('probe_port');
  }
  public set probePort(value: number) {
    this._probePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probePortInput() {
    return this._probePort;
  }

  // sql_virtual_machine_ids - computed: false, optional: false, required: true
  private _sqlVirtualMachineIds?: string[]; 
  public get sqlVirtualMachineIds() {
    return cdktf.Fn.tolist(this.getListAttribute('sql_virtual_machine_ids'));
  }
  public set sqlVirtualMachineIds(value: string[]) {
    this._sqlVirtualMachineIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVirtualMachineIdsInput() {
    return this._sqlVirtualMachineIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#private_ip_address MssqlVirtualMachineAvailabilityGroupListener#private_ip_address}
  */
  readonly privateIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}
  */
  readonly sqlVirtualMachineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#subnet_id MssqlVirtualMachineAvailabilityGroupListener#subnet_id}
  */
  readonly subnetId: string;
}

export function mssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationToTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    sql_virtual_machine_id: cdktf.stringToTerraform(struct!.sqlVirtualMachineId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function mssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationToHclTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_virtual_machine_id: {
      value: cdktf.stringToHclTerraform(struct!.sqlVirtualMachineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._sqlVirtualMachineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlVirtualMachineId = this._sqlVirtualMachineId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateIpAddress = undefined;
      this._sqlVirtualMachineId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateIpAddress = value.privateIpAddress;
      this._sqlVirtualMachineId = value.sqlVirtualMachineId;
      this._subnetId = value.subnetId;
    }
  }

  // private_ip_address - computed: false, optional: false, required: true
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // sql_virtual_machine_id - computed: false, optional: false, required: true
  private _sqlVirtualMachineId?: string; 
  public get sqlVirtualMachineId() {
    return this.getStringAttribute('sql_virtual_machine_id');
  }
  public set sqlVirtualMachineId(value: string) {
    this._sqlVirtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVirtualMachineIdInput() {
    return this._sqlVirtualMachineId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList extends cdktf.ComplexList {
  public internalValue? : MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[] | cdktf.IResolvable

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
  public get(index: number): MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference {
    return new MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MssqlVirtualMachineAvailabilityGroupListenerReplica {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#commit MssqlVirtualMachineAvailabilityGroupListener#commit}
  */
  readonly commit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#failover_mode MssqlVirtualMachineAvailabilityGroupListener#failover_mode}
  */
  readonly failoverMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#readable_secondary MssqlVirtualMachineAvailabilityGroupListener#readable_secondary}
  */
  readonly readableSecondary: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#role MssqlVirtualMachineAvailabilityGroupListener#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#sql_virtual_machine_id MssqlVirtualMachineAvailabilityGroupListener#sql_virtual_machine_id}
  */
  readonly sqlVirtualMachineId: string;
}

export function mssqlVirtualMachineAvailabilityGroupListenerReplicaToTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerReplica | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit: cdktf.stringToTerraform(struct!.commit),
    failover_mode: cdktf.stringToTerraform(struct!.failoverMode),
    readable_secondary: cdktf.stringToTerraform(struct!.readableSecondary),
    role: cdktf.stringToTerraform(struct!.role),
    sql_virtual_machine_id: cdktf.stringToTerraform(struct!.sqlVirtualMachineId),
  }
}


export function mssqlVirtualMachineAvailabilityGroupListenerReplicaToHclTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerReplica | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failover_mode: {
      value: cdktf.stringToHclTerraform(struct!.failoverMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readable_secondary: {
      value: cdktf.stringToHclTerraform(struct!.readableSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_virtual_machine_id: {
      value: cdktf.stringToHclTerraform(struct!.sqlVirtualMachineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MssqlVirtualMachineAvailabilityGroupListenerReplica | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._failoverMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverMode = this._failoverMode;
    }
    if (this._readableSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.readableSecondary = this._readableSecondary;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sqlVirtualMachineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlVirtualMachineId = this._sqlVirtualMachineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAvailabilityGroupListenerReplica | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commit = undefined;
      this._failoverMode = undefined;
      this._readableSecondary = undefined;
      this._role = undefined;
      this._sqlVirtualMachineId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commit = value.commit;
      this._failoverMode = value.failoverMode;
      this._readableSecondary = value.readableSecondary;
      this._role = value.role;
      this._sqlVirtualMachineId = value.sqlVirtualMachineId;
    }
  }

  // commit - computed: false, optional: false, required: true
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // failover_mode - computed: false, optional: false, required: true
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
  }

  // readable_secondary - computed: false, optional: false, required: true
  private _readableSecondary?: string; 
  public get readableSecondary() {
    return this.getStringAttribute('readable_secondary');
  }
  public set readableSecondary(value: string) {
    this._readableSecondary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readableSecondaryInput() {
    return this._readableSecondary;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sql_virtual_machine_id - computed: false, optional: false, required: true
  private _sqlVirtualMachineId?: string; 
  public get sqlVirtualMachineId() {
    return this.getStringAttribute('sql_virtual_machine_id');
  }
  public set sqlVirtualMachineId(value: string) {
    this._sqlVirtualMachineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVirtualMachineIdInput() {
    return this._sqlVirtualMachineId;
  }
}

export class MssqlVirtualMachineAvailabilityGroupListenerReplicaList extends cdktf.ComplexList {
  public internalValue? : MssqlVirtualMachineAvailabilityGroupListenerReplica[] | cdktf.IResolvable

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
  public get(index: number): MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference {
    return new MssqlVirtualMachineAvailabilityGroupListenerReplicaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MssqlVirtualMachineAvailabilityGroupListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#create MssqlVirtualMachineAvailabilityGroupListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#delete MssqlVirtualMachineAvailabilityGroupListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#read MssqlVirtualMachineAvailabilityGroupListener#read}
  */
  readonly read?: string;
}

export function mssqlVirtualMachineAvailabilityGroupListenerTimeoutsToTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function mssqlVirtualMachineAvailabilityGroupListenerTimeoutsToHclTerraform(struct?: MssqlVirtualMachineAvailabilityGroupListenerTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlVirtualMachineAvailabilityGroupListenerTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineAvailabilityGroupListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener azurerm_mssql_virtual_machine_availability_group_listener}
*/
export class MssqlVirtualMachineAvailabilityGroupListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_virtual_machine_availability_group_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlVirtualMachineAvailabilityGroupListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlVirtualMachineAvailabilityGroupListener to import
  * @param importFromId The id of the existing MssqlVirtualMachineAvailabilityGroupListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlVirtualMachineAvailabilityGroupListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_virtual_machine_availability_group_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_availability_group_listener azurerm_mssql_virtual_machine_availability_group_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlVirtualMachineAvailabilityGroupListenerConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlVirtualMachineAvailabilityGroupListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_virtual_machine_availability_group_listener',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
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
    this._availabilityGroupName = config.availabilityGroupName;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._sqlVirtualMachineGroupId = config.sqlVirtualMachineGroupId;
    this._loadBalancerConfiguration.internalValue = config.loadBalancerConfiguration;
    this._multiSubnetIpConfiguration.internalValue = config.multiSubnetIpConfiguration;
    this._replica.internalValue = config.replica;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_group_name - computed: false, optional: true, required: false
  private _availabilityGroupName?: string; 
  public get availabilityGroupName() {
    return this.getStringAttribute('availability_group_name');
  }
  public set availabilityGroupName(value: string) {
    this._availabilityGroupName = value;
  }
  public resetAvailabilityGroupName() {
    this._availabilityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityGroupNameInput() {
    return this._availabilityGroupName;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sql_virtual_machine_group_id - computed: false, optional: false, required: true
  private _sqlVirtualMachineGroupId?: string; 
  public get sqlVirtualMachineGroupId() {
    return this.getStringAttribute('sql_virtual_machine_group_id');
  }
  public set sqlVirtualMachineGroupId(value: string) {
    this._sqlVirtualMachineGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVirtualMachineGroupIdInput() {
    return this._sqlVirtualMachineGroupId;
  }

  // load_balancer_configuration - computed: false, optional: true, required: false
  private _loadBalancerConfiguration = new MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationOutputReference(this, "load_balancer_configuration");
  public get loadBalancerConfiguration() {
    return this._loadBalancerConfiguration;
  }
  public putLoadBalancerConfiguration(value: MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfiguration) {
    this._loadBalancerConfiguration.internalValue = value;
  }
  public resetLoadBalancerConfiguration() {
    this._loadBalancerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerConfigurationInput() {
    return this._loadBalancerConfiguration.internalValue;
  }

  // multi_subnet_ip_configuration - computed: false, optional: true, required: false
  private _multiSubnetIpConfiguration = new MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList(this, "multi_subnet_ip_configuration", true);
  public get multiSubnetIpConfiguration() {
    return this._multiSubnetIpConfiguration;
  }
  public putMultiSubnetIpConfiguration(value: MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfiguration[] | cdktf.IResolvable) {
    this._multiSubnetIpConfiguration.internalValue = value;
  }
  public resetMultiSubnetIpConfiguration() {
    this._multiSubnetIpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiSubnetIpConfigurationInput() {
    return this._multiSubnetIpConfiguration.internalValue;
  }

  // replica - computed: false, optional: false, required: true
  private _replica = new MssqlVirtualMachineAvailabilityGroupListenerReplicaList(this, "replica", true);
  public get replica() {
    return this._replica;
  }
  public putReplica(value: MssqlVirtualMachineAvailabilityGroupListenerReplica[] | cdktf.IResolvable) {
    this._replica.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlVirtualMachineAvailabilityGroupListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlVirtualMachineAvailabilityGroupListenerTimeouts) {
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
      availability_group_name: cdktf.stringToTerraform(this._availabilityGroupName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      sql_virtual_machine_group_id: cdktf.stringToTerraform(this._sqlVirtualMachineGroupId),
      load_balancer_configuration: mssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationToTerraform(this._loadBalancerConfiguration.internalValue),
      multi_subnet_ip_configuration: cdktf.listMapper(mssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationToTerraform, true)(this._multiSubnetIpConfiguration.internalValue),
      replica: cdktf.listMapper(mssqlVirtualMachineAvailabilityGroupListenerReplicaToTerraform, true)(this._replica.internalValue),
      timeouts: mssqlVirtualMachineAvailabilityGroupListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_group_name: {
        value: cdktf.stringToHclTerraform(this._availabilityGroupName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_virtual_machine_group_id: {
        value: cdktf.stringToHclTerraform(this._sqlVirtualMachineGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_configuration: {
        value: mssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationToHclTerraform(this._loadBalancerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineAvailabilityGroupListenerLoadBalancerConfigurationList",
      },
      multi_subnet_ip_configuration: {
        value: cdktf.listMapperHcl(mssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationToHclTerraform, true)(this._multiSubnetIpConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MssqlVirtualMachineAvailabilityGroupListenerMultiSubnetIpConfigurationList",
      },
      replica: {
        value: cdktf.listMapperHcl(mssqlVirtualMachineAvailabilityGroupListenerReplicaToHclTerraform, true)(this._replica.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MssqlVirtualMachineAvailabilityGroupListenerReplicaList",
      },
      timeouts: {
        value: mssqlVirtualMachineAvailabilityGroupListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlVirtualMachineAvailabilityGroupListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
