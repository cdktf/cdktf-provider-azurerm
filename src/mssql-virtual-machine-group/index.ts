// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlVirtualMachineGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#id MssqlVirtualMachineGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#location MssqlVirtualMachineGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#name MssqlVirtualMachineGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#resource_group_name MssqlVirtualMachineGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#sql_image_offer MssqlVirtualMachineGroup#sql_image_offer}
  */
  readonly sqlImageOffer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#sql_image_sku MssqlVirtualMachineGroup#sql_image_sku}
  */
  readonly sqlImageSku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#tags MssqlVirtualMachineGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#timeouts MssqlVirtualMachineGroup#timeouts}
  */
  readonly timeouts?: MssqlVirtualMachineGroupTimeouts;
  /**
  * wsfc_domain_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#wsfc_domain_profile MssqlVirtualMachineGroup#wsfc_domain_profile}
  */
  readonly wsfcDomainProfile: MssqlVirtualMachineGroupWsfcDomainProfile;
}
export interface MssqlVirtualMachineGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#create MssqlVirtualMachineGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#delete MssqlVirtualMachineGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#read MssqlVirtualMachineGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#update MssqlVirtualMachineGroup#update}
  */
  readonly update?: string;
}

export function mssqlVirtualMachineGroupTimeoutsToTerraform(struct?: MssqlVirtualMachineGroupTimeouts | cdktf.IResolvable): any {
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


export function mssqlVirtualMachineGroupTimeoutsToHclTerraform(struct?: MssqlVirtualMachineGroupTimeouts | cdktf.IResolvable): any {
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

export class MssqlVirtualMachineGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlVirtualMachineGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MssqlVirtualMachineGroupTimeouts | cdktf.IResolvable | undefined) {
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
export interface MssqlVirtualMachineGroupWsfcDomainProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#cluster_bootstrap_account_name MssqlVirtualMachineGroup#cluster_bootstrap_account_name}
  */
  readonly clusterBootstrapAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#cluster_operator_account_name MssqlVirtualMachineGroup#cluster_operator_account_name}
  */
  readonly clusterOperatorAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#cluster_subnet_type MssqlVirtualMachineGroup#cluster_subnet_type}
  */
  readonly clusterSubnetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#fqdn MssqlVirtualMachineGroup#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#organizational_unit_path MssqlVirtualMachineGroup#organizational_unit_path}
  */
  readonly organizationalUnitPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#sql_service_account_name MssqlVirtualMachineGroup#sql_service_account_name}
  */
  readonly sqlServiceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#storage_account_primary_key MssqlVirtualMachineGroup#storage_account_primary_key}
  */
  readonly storageAccountPrimaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#storage_account_url MssqlVirtualMachineGroup#storage_account_url}
  */
  readonly storageAccountUrl?: string;
}

export function mssqlVirtualMachineGroupWsfcDomainProfileToTerraform(struct?: MssqlVirtualMachineGroupWsfcDomainProfileOutputReference | MssqlVirtualMachineGroupWsfcDomainProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_bootstrap_account_name: cdktf.stringToTerraform(struct!.clusterBootstrapAccountName),
    cluster_operator_account_name: cdktf.stringToTerraform(struct!.clusterOperatorAccountName),
    cluster_subnet_type: cdktf.stringToTerraform(struct!.clusterSubnetType),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    organizational_unit_path: cdktf.stringToTerraform(struct!.organizationalUnitPath),
    sql_service_account_name: cdktf.stringToTerraform(struct!.sqlServiceAccountName),
    storage_account_primary_key: cdktf.stringToTerraform(struct!.storageAccountPrimaryKey),
    storage_account_url: cdktf.stringToTerraform(struct!.storageAccountUrl),
  }
}


export function mssqlVirtualMachineGroupWsfcDomainProfileToHclTerraform(struct?: MssqlVirtualMachineGroupWsfcDomainProfileOutputReference | MssqlVirtualMachineGroupWsfcDomainProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_bootstrap_account_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterBootstrapAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_operator_account_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterOperatorAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_subnet_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterSubnetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_path: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnitPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.sqlServiceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_primary_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_url: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlVirtualMachineGroupWsfcDomainProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlVirtualMachineGroupWsfcDomainProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterBootstrapAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterBootstrapAccountName = this._clusterBootstrapAccountName;
    }
    if (this._clusterOperatorAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterOperatorAccountName = this._clusterOperatorAccountName;
    }
    if (this._clusterSubnetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSubnetType = this._clusterSubnetType;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._organizationalUnitPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitPath = this._organizationalUnitPath;
    }
    if (this._sqlServiceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServiceAccountName = this._sqlServiceAccountName;
    }
    if (this._storageAccountPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountPrimaryKey = this._storageAccountPrimaryKey;
    }
    if (this._storageAccountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountUrl = this._storageAccountUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlVirtualMachineGroupWsfcDomainProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterBootstrapAccountName = undefined;
      this._clusterOperatorAccountName = undefined;
      this._clusterSubnetType = undefined;
      this._fqdn = undefined;
      this._organizationalUnitPath = undefined;
      this._sqlServiceAccountName = undefined;
      this._storageAccountPrimaryKey = undefined;
      this._storageAccountUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterBootstrapAccountName = value.clusterBootstrapAccountName;
      this._clusterOperatorAccountName = value.clusterOperatorAccountName;
      this._clusterSubnetType = value.clusterSubnetType;
      this._fqdn = value.fqdn;
      this._organizationalUnitPath = value.organizationalUnitPath;
      this._sqlServiceAccountName = value.sqlServiceAccountName;
      this._storageAccountPrimaryKey = value.storageAccountPrimaryKey;
      this._storageAccountUrl = value.storageAccountUrl;
    }
  }

  // cluster_bootstrap_account_name - computed: false, optional: true, required: false
  private _clusterBootstrapAccountName?: string; 
  public get clusterBootstrapAccountName() {
    return this.getStringAttribute('cluster_bootstrap_account_name');
  }
  public set clusterBootstrapAccountName(value: string) {
    this._clusterBootstrapAccountName = value;
  }
  public resetClusterBootstrapAccountName() {
    this._clusterBootstrapAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterBootstrapAccountNameInput() {
    return this._clusterBootstrapAccountName;
  }

  // cluster_operator_account_name - computed: false, optional: true, required: false
  private _clusterOperatorAccountName?: string; 
  public get clusterOperatorAccountName() {
    return this.getStringAttribute('cluster_operator_account_name');
  }
  public set clusterOperatorAccountName(value: string) {
    this._clusterOperatorAccountName = value;
  }
  public resetClusterOperatorAccountName() {
    this._clusterOperatorAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperatorAccountNameInput() {
    return this._clusterOperatorAccountName;
  }

  // cluster_subnet_type - computed: false, optional: false, required: true
  private _clusterSubnetType?: string; 
  public get clusterSubnetType() {
    return this.getStringAttribute('cluster_subnet_type');
  }
  public set clusterSubnetType(value: string) {
    this._clusterSubnetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSubnetTypeInput() {
    return this._clusterSubnetType;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // organizational_unit_path - computed: false, optional: true, required: false
  private _organizationalUnitPath?: string; 
  public get organizationalUnitPath() {
    return this.getStringAttribute('organizational_unit_path');
  }
  public set organizationalUnitPath(value: string) {
    this._organizationalUnitPath = value;
  }
  public resetOrganizationalUnitPath() {
    this._organizationalUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitPathInput() {
    return this._organizationalUnitPath;
  }

  // sql_service_account_name - computed: false, optional: true, required: false
  private _sqlServiceAccountName?: string; 
  public get sqlServiceAccountName() {
    return this.getStringAttribute('sql_service_account_name');
  }
  public set sqlServiceAccountName(value: string) {
    this._sqlServiceAccountName = value;
  }
  public resetSqlServiceAccountName() {
    this._sqlServiceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServiceAccountNameInput() {
    return this._sqlServiceAccountName;
  }

  // storage_account_primary_key - computed: false, optional: true, required: false
  private _storageAccountPrimaryKey?: string; 
  public get storageAccountPrimaryKey() {
    return this.getStringAttribute('storage_account_primary_key');
  }
  public set storageAccountPrimaryKey(value: string) {
    this._storageAccountPrimaryKey = value;
  }
  public resetStorageAccountPrimaryKey() {
    this._storageAccountPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountPrimaryKeyInput() {
    return this._storageAccountPrimaryKey;
  }

  // storage_account_url - computed: false, optional: true, required: false
  private _storageAccountUrl?: string; 
  public get storageAccountUrl() {
    return this.getStringAttribute('storage_account_url');
  }
  public set storageAccountUrl(value: string) {
    this._storageAccountUrl = value;
  }
  public resetStorageAccountUrl() {
    this._storageAccountUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountUrlInput() {
    return this._storageAccountUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group azurerm_mssql_virtual_machine_group}
*/
export class MssqlVirtualMachineGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_virtual_machine_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlVirtualMachineGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlVirtualMachineGroup to import
  * @param importFromId The id of the existing MssqlVirtualMachineGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlVirtualMachineGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_virtual_machine_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_virtual_machine_group azurerm_mssql_virtual_machine_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlVirtualMachineGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlVirtualMachineGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_virtual_machine_group',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlImageOffer = config.sqlImageOffer;
    this._sqlImageSku = config.sqlImageSku;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._wsfcDomainProfile.internalValue = config.wsfcDomainProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sql_image_offer - computed: false, optional: false, required: true
  private _sqlImageOffer?: string; 
  public get sqlImageOffer() {
    return this.getStringAttribute('sql_image_offer');
  }
  public set sqlImageOffer(value: string) {
    this._sqlImageOffer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlImageOfferInput() {
    return this._sqlImageOffer;
  }

  // sql_image_sku - computed: false, optional: false, required: true
  private _sqlImageSku?: string; 
  public get sqlImageSku() {
    return this.getStringAttribute('sql_image_sku');
  }
  public set sqlImageSku(value: string) {
    this._sqlImageSku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlImageSkuInput() {
    return this._sqlImageSku;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlVirtualMachineGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlVirtualMachineGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wsfc_domain_profile - computed: false, optional: false, required: true
  private _wsfcDomainProfile = new MssqlVirtualMachineGroupWsfcDomainProfileOutputReference(this, "wsfc_domain_profile");
  public get wsfcDomainProfile() {
    return this._wsfcDomainProfile;
  }
  public putWsfcDomainProfile(value: MssqlVirtualMachineGroupWsfcDomainProfile) {
    this._wsfcDomainProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wsfcDomainProfileInput() {
    return this._wsfcDomainProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sql_image_offer: cdktf.stringToTerraform(this._sqlImageOffer),
      sql_image_sku: cdktf.stringToTerraform(this._sqlImageSku),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: mssqlVirtualMachineGroupTimeoutsToTerraform(this._timeouts.internalValue),
      wsfc_domain_profile: mssqlVirtualMachineGroupWsfcDomainProfileToTerraform(this._wsfcDomainProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_image_offer: {
        value: cdktf.stringToHclTerraform(this._sqlImageOffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_image_sku: {
        value: cdktf.stringToHclTerraform(this._sqlImageSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: mssqlVirtualMachineGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlVirtualMachineGroupTimeouts",
      },
      wsfc_domain_profile: {
        value: mssqlVirtualMachineGroupWsfcDomainProfileToHclTerraform(this._wsfcDomainProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlVirtualMachineGroupWsfcDomainProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
