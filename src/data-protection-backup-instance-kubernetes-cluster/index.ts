// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupInstanceKubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}
  */
  readonly backupPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}
  */
  readonly snapshotResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}
  */
  readonly vaultId: string;
  /**
  * backup_datasource_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_datasource_parameters DataProtectionBackupInstanceKubernetesCluster#backup_datasource_parameters}
  */
  readonly backupDatasourceParameters?: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#timeouts DataProtectionBackupInstanceKubernetesCluster#timeouts}
  */
  readonly timeouts?: DataProtectionBackupInstanceKubernetesClusterTimeouts;
}
export interface DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}
  */
  readonly clusterScopedResourcesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}
  */
  readonly excludedNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}
  */
  readonly excludedResourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}
  */
  readonly includedNamespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}
  */
  readonly includedResourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}
  */
  readonly labelSelectors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}
  */
  readonly volumeSnapshotEnabled?: boolean | cdktf.IResolvable;
}

export function dataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersToTerraform(struct?: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference | DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_scoped_resources_enabled: cdktf.booleanToTerraform(struct!.clusterScopedResourcesEnabled),
    excluded_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedNamespaces),
    excluded_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedResourceTypes),
    included_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedNamespaces),
    included_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedResourceTypes),
    label_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSelectors),
    volume_snapshot_enabled: cdktf.booleanToTerraform(struct!.volumeSnapshotEnabled),
  }
}


export function dataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersToHclTerraform(struct?: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference | DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_scoped_resources_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clusterScopedResourcesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedResourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedResourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSelectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_snapshot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.volumeSnapshotEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterScopedResourcesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterScopedResourcesEnabled = this._clusterScopedResourcesEnabled;
    }
    if (this._excludedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces;
    }
    if (this._excludedResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedResourceTypes = this._excludedResourceTypes;
    }
    if (this._includedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedNamespaces = this._includedNamespaces;
    }
    if (this._includedResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedResourceTypes = this._includedResourceTypes;
    }
    if (this._labelSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelectors = this._labelSelectors;
    }
    if (this._volumeSnapshotEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSnapshotEnabled = this._volumeSnapshotEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterScopedResourcesEnabled = undefined;
      this._excludedNamespaces = undefined;
      this._excludedResourceTypes = undefined;
      this._includedNamespaces = undefined;
      this._includedResourceTypes = undefined;
      this._labelSelectors = undefined;
      this._volumeSnapshotEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterScopedResourcesEnabled = value.clusterScopedResourcesEnabled;
      this._excludedNamespaces = value.excludedNamespaces;
      this._excludedResourceTypes = value.excludedResourceTypes;
      this._includedNamespaces = value.includedNamespaces;
      this._includedResourceTypes = value.includedResourceTypes;
      this._labelSelectors = value.labelSelectors;
      this._volumeSnapshotEnabled = value.volumeSnapshotEnabled;
    }
  }

  // cluster_scoped_resources_enabled - computed: false, optional: true, required: false
  private _clusterScopedResourcesEnabled?: boolean | cdktf.IResolvable; 
  public get clusterScopedResourcesEnabled() {
    return this.getBooleanAttribute('cluster_scoped_resources_enabled');
  }
  public set clusterScopedResourcesEnabled(value: boolean | cdktf.IResolvable) {
    this._clusterScopedResourcesEnabled = value;
  }
  public resetClusterScopedResourcesEnabled() {
    this._clusterScopedResourcesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterScopedResourcesEnabledInput() {
    return this._clusterScopedResourcesEnabled;
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces?: string[]; 
  public get excludedNamespaces() {
    return this.getListAttribute('excluded_namespaces');
  }
  public set excludedNamespaces(value: string[]) {
    this._excludedNamespaces = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces;
  }

  // excluded_resource_types - computed: false, optional: true, required: false
  private _excludedResourceTypes?: string[]; 
  public get excludedResourceTypes() {
    return this.getListAttribute('excluded_resource_types');
  }
  public set excludedResourceTypes(value: string[]) {
    this._excludedResourceTypes = value;
  }
  public resetExcludedResourceTypes() {
    this._excludedResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedResourceTypesInput() {
    return this._excludedResourceTypes;
  }

  // included_namespaces - computed: false, optional: true, required: false
  private _includedNamespaces?: string[]; 
  public get includedNamespaces() {
    return this.getListAttribute('included_namespaces');
  }
  public set includedNamespaces(value: string[]) {
    this._includedNamespaces = value;
  }
  public resetIncludedNamespaces() {
    this._includedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedNamespacesInput() {
    return this._includedNamespaces;
  }

  // included_resource_types - computed: false, optional: true, required: false
  private _includedResourceTypes?: string[]; 
  public get includedResourceTypes() {
    return this.getListAttribute('included_resource_types');
  }
  public set includedResourceTypes(value: string[]) {
    this._includedResourceTypes = value;
  }
  public resetIncludedResourceTypes() {
    this._includedResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedResourceTypesInput() {
    return this._includedResourceTypes;
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors?: string[]; 
  public get labelSelectors() {
    return this.getListAttribute('label_selectors');
  }
  public set labelSelectors(value: string[]) {
    this._labelSelectors = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors;
  }

  // volume_snapshot_enabled - computed: false, optional: true, required: false
  private _volumeSnapshotEnabled?: boolean | cdktf.IResolvable; 
  public get volumeSnapshotEnabled() {
    return this.getBooleanAttribute('volume_snapshot_enabled');
  }
  public set volumeSnapshotEnabled(value: boolean | cdktf.IResolvable) {
    this._volumeSnapshotEnabled = value;
  }
  public resetVolumeSnapshotEnabled() {
    this._volumeSnapshotEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSnapshotEnabledInput() {
    return this._volumeSnapshotEnabled;
  }
}
export interface DataProtectionBackupInstanceKubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}
  */
  readonly read?: string;
}

export function dataProtectionBackupInstanceKubernetesClusterTimeoutsToTerraform(struct?: DataProtectionBackupInstanceKubernetesClusterTimeouts | cdktf.IResolvable): any {
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


export function dataProtectionBackupInstanceKubernetesClusterTimeoutsToHclTerraform(struct?: DataProtectionBackupInstanceKubernetesClusterTimeouts | cdktf.IResolvable): any {
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

export class DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProtectionBackupInstanceKubernetesClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataProtectionBackupInstanceKubernetesClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster azurerm_data_protection_backup_instance_kubernetes_cluster}
*/
export class DataProtectionBackupInstanceKubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_protection_backup_instance_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProtectionBackupInstanceKubernetesCluster to import
  * @param importFromId The id of the existing DataProtectionBackupInstanceKubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProtectionBackupInstanceKubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_protection_backup_instance_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/data_protection_backup_instance_kubernetes_cluster azurerm_data_protection_backup_instance_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupInstanceKubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupInstanceKubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_instance_kubernetes_cluster',
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
    this._backupPolicyId = config.backupPolicyId;
    this._id = config.id;
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._location = config.location;
    this._name = config.name;
    this._snapshotResourceGroupName = config.snapshotResourceGroupName;
    this._vaultId = config.vaultId;
    this._backupDatasourceParameters.internalValue = config.backupDatasourceParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: false, required: true
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
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

  // kubernetes_cluster_id - computed: false, optional: false, required: true
  private _kubernetesClusterId?: string; 
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId;
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

  // snapshot_resource_group_name - computed: false, optional: false, required: true
  private _snapshotResourceGroupName?: string; 
  public get snapshotResourceGroupName() {
    return this.getStringAttribute('snapshot_resource_group_name');
  }
  public set snapshotResourceGroupName(value: string) {
    this._snapshotResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotResourceGroupNameInput() {
    return this._snapshotResourceGroupName;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }

  // backup_datasource_parameters - computed: false, optional: true, required: false
  private _backupDatasourceParameters = new DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference(this, "backup_datasource_parameters");
  public get backupDatasourceParameters() {
    return this._backupDatasourceParameters;
  }
  public putBackupDatasourceParameters(value: DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters) {
    this._backupDatasourceParameters.internalValue = value;
  }
  public resetBackupDatasourceParameters() {
    this._backupDatasourceParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDatasourceParametersInput() {
    return this._backupDatasourceParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProtectionBackupInstanceKubernetesClusterTimeouts) {
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
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_cluster_id: cdktf.stringToTerraform(this._kubernetesClusterId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      snapshot_resource_group_name: cdktf.stringToTerraform(this._snapshotResourceGroupName),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      backup_datasource_parameters: dataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersToTerraform(this._backupDatasourceParameters.internalValue),
      timeouts: dataProtectionBackupInstanceKubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_policy_id: {
        value: cdktf.stringToHclTerraform(this._backupPolicyId),
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
      kubernetes_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesClusterId),
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
      snapshot_resource_group_name: {
        value: cdktf.stringToHclTerraform(this._snapshotResourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_id: {
        value: cdktf.stringToHclTerraform(this._vaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_datasource_parameters: {
        value: dataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersToHclTerraform(this._backupDatasourceParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersList",
      },
      timeouts: {
        value: dataProtectionBackupInstanceKubernetesClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProtectionBackupInstanceKubernetesClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
