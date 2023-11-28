# `databricksWorkspace` Submodule <a name="`databricksWorkspace` Submodule" id="@cdktf/provider-azurerm.databricksWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspace <a name="DatabricksWorkspace" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace azurerm_databricks_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspace;

DatabricksWorkspace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .customerManagedKeyEnabled(java.lang.Boolean)
//  .customerManagedKeyEnabled(IResolvable)
//  .customParameters(DatabricksWorkspaceCustomParameters)
//  .id(java.lang.String)
//  .infrastructureEncryptionEnabled(java.lang.Boolean)
//  .infrastructureEncryptionEnabled(IResolvable)
//  .loadBalancerBackendAddressPoolId(java.lang.String)
//  .managedDiskCmkKeyVaultKeyId(java.lang.String)
//  .managedDiskCmkRotationToLatestVersionEnabled(java.lang.Boolean)
//  .managedDiskCmkRotationToLatestVersionEnabled(IResolvable)
//  .managedResourceGroupName(java.lang.String)
//  .managedServicesCmkKeyVaultKeyId(java.lang.String)
//  .networkSecurityGroupRulesRequired(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DatabricksWorkspaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customParameters">customParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | custom_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.loadBalancerBackendAddressPoolId">loadBalancerBackendAddressPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkKeyVaultKeyId">managedDiskCmkKeyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkRotationToLatestVersionEnabled">managedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedServicesCmkKeyVaultKeyId">managedServicesCmkKeyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.networkSecurityGroupRulesRequired">networkSecurityGroupRulesRequired</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}.

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customerManagedKeyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}.

---

##### `customParameters`<sup>Optional</sup> <a name="customParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.customParameters"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

custom_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}.

---

##### `loadBalancerBackendAddressPoolId`<sup>Optional</sup> <a name="loadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.loadBalancerBackendAddressPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}.

---

##### `managedDiskCmkKeyVaultKeyId`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkKeyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}.

---

##### `managedDiskCmkRotationToLatestVersionEnabled`<sup>Optional</sup> <a name="managedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedDiskCmkRotationToLatestVersionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}.

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}.

---

##### `managedServicesCmkKeyVaultKeyId`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.managedServicesCmkKeyVaultKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}.

---

##### `networkSecurityGroupRulesRequired`<sup>Optional</sup> <a name="networkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.networkSecurityGroupRulesRequired"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters">putCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters">resetCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId">resetLoadBalancerBackendAddressPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId">resetManagedDiskCmkKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled">resetManagedDiskCmkRotationToLatestVersionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId">resetManagedServicesCmkKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired">resetNetworkSecurityGroupRulesRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCustomParameters` <a name="putCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters"></a>

```java
public void putCustomParameters(DatabricksWorkspaceCustomParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putCustomParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts"></a>

```java
public void putTimeouts(DatabricksWorkspaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomerManagedKeyEnabled"></a>

```java
public void resetCustomerManagedKeyEnabled()
```

##### `resetCustomParameters` <a name="resetCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetCustomParameters"></a>

```java
public void resetCustomParameters()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetInfrastructureEncryptionEnabled"></a>

```java
public void resetInfrastructureEncryptionEnabled()
```

##### `resetLoadBalancerBackendAddressPoolId` <a name="resetLoadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetLoadBalancerBackendAddressPoolId"></a>

```java
public void resetLoadBalancerBackendAddressPoolId()
```

##### `resetManagedDiskCmkKeyVaultKeyId` <a name="resetManagedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkKeyVaultKeyId"></a>

```java
public void resetManagedDiskCmkKeyVaultKeyId()
```

##### `resetManagedDiskCmkRotationToLatestVersionEnabled` <a name="resetManagedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedDiskCmkRotationToLatestVersionEnabled"></a>

```java
public void resetManagedDiskCmkRotationToLatestVersionEnabled()
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedResourceGroupName"></a>

```java
public void resetManagedResourceGroupName()
```

##### `resetManagedServicesCmkKeyVaultKeyId` <a name="resetManagedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetManagedServicesCmkKeyVaultKeyId"></a>

```java
public void resetManagedServicesCmkKeyVaultKeyId()
```

##### `resetNetworkSecurityGroupRulesRequired` <a name="resetNetworkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetNetworkSecurityGroupRulesRequired"></a>

```java
public void resetNetworkSecurityGroupRulesRequired()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspace;

DatabricksWorkspace.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspace;

DatabricksWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspace;

DatabricksWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspace;

DatabricksWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabricksWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabricksWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabricksWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabricksWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters">customParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId">diskEncryptionSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity">managedDiskIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId">managedResourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity">storageAccountIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl">workspaceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput">customParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput">loadBalancerBackendAddressPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput">managedDiskCmkKeyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput">managedDiskCmkRotationToLatestVersionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput">managedServicesCmkKeyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput">networkSecurityGroupRulesRequiredInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId">loadBalancerBackendAddressPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId">managedDiskCmkKeyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled">managedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId">managedServicesCmkKeyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired">networkSecurityGroupRulesRequired</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customParameters`<sup>Required</sup> <a name="customParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParameters"></a>

```java
public DatabricksWorkspaceCustomParametersOutputReference getCustomParameters();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference">DatabricksWorkspaceCustomParametersOutputReference</a>

---

##### `diskEncryptionSetId`<sup>Required</sup> <a name="diskEncryptionSetId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.diskEncryptionSetId"></a>

```java
public java.lang.String getDiskEncryptionSetId();
```

- *Type:* java.lang.String

---

##### `managedDiskIdentity`<sup>Required</sup> <a name="managedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskIdentity"></a>

```java
public DatabricksWorkspaceManagedDiskIdentityList getManagedDiskIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList">DatabricksWorkspaceManagedDiskIdentityList</a>

---

##### `managedResourceGroupId`<sup>Required</sup> <a name="managedResourceGroupId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupId"></a>

```java
public java.lang.String getManagedResourceGroupId();
```

- *Type:* java.lang.String

---

##### `storageAccountIdentity`<sup>Required</sup> <a name="storageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.storageAccountIdentity"></a>

```java
public DatabricksWorkspaceStorageAccountIdentityList getStorageAccountIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList">DatabricksWorkspaceStorageAccountIdentityList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeouts"></a>

```java
public DatabricksWorkspaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference">DatabricksWorkspaceTimeoutsOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.workspaceUrl"></a>

```java
public java.lang.String getWorkspaceUrl();
```

- *Type:* java.lang.String

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabledInput"></a>

```java
public java.lang.Object getCustomerManagedKeyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customParametersInput`<sup>Optional</sup> <a name="customParametersInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customParametersInput"></a>

```java
public DatabricksWorkspaceCustomParameters getCustomParametersInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabledInput"></a>

```java
public java.lang.Object getInfrastructureEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerBackendAddressPoolIdInput`<sup>Optional</sup> <a name="loadBalancerBackendAddressPoolIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolIdInput"></a>

```java
public java.lang.String getLoadBalancerBackendAddressPoolIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedDiskCmkKeyVaultKeyIdInput`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyIdInput"></a>

```java
public java.lang.String getManagedDiskCmkKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `managedDiskCmkRotationToLatestVersionEnabledInput`<sup>Optional</sup> <a name="managedDiskCmkRotationToLatestVersionEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabledInput"></a>

```java
public java.lang.Object getManagedDiskCmkRotationToLatestVersionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupNameInput"></a>

```java
public java.lang.String getManagedResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `managedServicesCmkKeyVaultKeyIdInput`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyIdInput"></a>

```java
public java.lang.String getManagedServicesCmkKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupRulesRequiredInput`<sup>Optional</sup> <a name="networkSecurityGroupRulesRequiredInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequiredInput"></a>

```java
public java.lang.String getNetworkSecurityGroupRulesRequiredInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.customerManagedKeyEnabled"></a>

```java
public java.lang.Object getCustomerManagedKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.infrastructureEncryptionEnabled"></a>

```java
public java.lang.Object getInfrastructureEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerBackendAddressPoolId`<sup>Required</sup> <a name="loadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.loadBalancerBackendAddressPoolId"></a>

```java
public java.lang.String getLoadBalancerBackendAddressPoolId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedDiskCmkKeyVaultKeyId`<sup>Required</sup> <a name="managedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkKeyVaultKeyId"></a>

```java
public java.lang.String getManagedDiskCmkKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `managedDiskCmkRotationToLatestVersionEnabled`<sup>Required</sup> <a name="managedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```java
public java.lang.Object getManagedDiskCmkRotationToLatestVersionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

---

##### `managedServicesCmkKeyVaultKeyId`<sup>Required</sup> <a name="managedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.managedServicesCmkKeyVaultKeyId"></a>

```java
public java.lang.String getManagedServicesCmkKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupRulesRequired`<sup>Required</sup> <a name="networkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.networkSecurityGroupRulesRequired"></a>

```java
public java.lang.String getNetworkSecurityGroupRulesRequired();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceConfig <a name="DatabricksWorkspaceConfig" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceConfig;

DatabricksWorkspaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .sku(java.lang.String)
//  .customerManagedKeyEnabled(java.lang.Boolean)
//  .customerManagedKeyEnabled(IResolvable)
//  .customParameters(DatabricksWorkspaceCustomParameters)
//  .id(java.lang.String)
//  .infrastructureEncryptionEnabled(java.lang.Boolean)
//  .infrastructureEncryptionEnabled(IResolvable)
//  .loadBalancerBackendAddressPoolId(java.lang.String)
//  .managedDiskCmkKeyVaultKeyId(java.lang.String)
//  .managedDiskCmkRotationToLatestVersionEnabled(java.lang.Boolean)
//  .managedDiskCmkRotationToLatestVersionEnabled(IResolvable)
//  .managedResourceGroupName(java.lang.String)
//  .managedServicesCmkKeyVaultKeyId(java.lang.String)
//  .networkSecurityGroupRulesRequired(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DatabricksWorkspaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters">customParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | custom_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId">loadBalancerBackendAddressPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId">managedDiskCmkKeyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled">managedDiskCmkRotationToLatestVersionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId">managedServicesCmkKeyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired">networkSecurityGroupRulesRequired</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#location DatabricksWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#name DatabricksWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#resource_group_name DatabricksWorkspace#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#sku DatabricksWorkspace#sku}.

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customerManagedKeyEnabled"></a>

```java
public java.lang.Object getCustomerManagedKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#customer_managed_key_enabled DatabricksWorkspace#customer_managed_key_enabled}.

---

##### `customParameters`<sup>Optional</sup> <a name="customParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.customParameters"></a>

```java
public DatabricksWorkspaceCustomParameters getCustomParameters();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

custom_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#custom_parameters DatabricksWorkspace#custom_parameters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#id DatabricksWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureEncryptionEnabled`<sup>Optional</sup> <a name="infrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.infrastructureEncryptionEnabled"></a>

```java
public java.lang.Object getInfrastructureEncryptionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#infrastructure_encryption_enabled DatabricksWorkspace#infrastructure_encryption_enabled}.

---

##### `loadBalancerBackendAddressPoolId`<sup>Optional</sup> <a name="loadBalancerBackendAddressPoolId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.loadBalancerBackendAddressPoolId"></a>

```java
public java.lang.String getLoadBalancerBackendAddressPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#load_balancer_backend_address_pool_id DatabricksWorkspace#load_balancer_backend_address_pool_id}.

---

##### `managedDiskCmkKeyVaultKeyId`<sup>Optional</sup> <a name="managedDiskCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkKeyVaultKeyId"></a>

```java
public java.lang.String getManagedDiskCmkKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_key_vault_key_id DatabricksWorkspace#managed_disk_cmk_key_vault_key_id}.

---

##### `managedDiskCmkRotationToLatestVersionEnabled`<sup>Optional</sup> <a name="managedDiskCmkRotationToLatestVersionEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedDiskCmkRotationToLatestVersionEnabled"></a>

```java
public java.lang.Object getManagedDiskCmkRotationToLatestVersionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_disk_cmk_rotation_to_latest_version_enabled DatabricksWorkspace#managed_disk_cmk_rotation_to_latest_version_enabled}.

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_resource_group_name DatabricksWorkspace#managed_resource_group_name}.

---

##### `managedServicesCmkKeyVaultKeyId`<sup>Optional</sup> <a name="managedServicesCmkKeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.managedServicesCmkKeyVaultKeyId"></a>

```java
public java.lang.String getManagedServicesCmkKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#managed_services_cmk_key_vault_key_id DatabricksWorkspace#managed_services_cmk_key_vault_key_id}.

---

##### `networkSecurityGroupRulesRequired`<sup>Optional</sup> <a name="networkSecurityGroupRulesRequired" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.networkSecurityGroupRulesRequired"></a>

```java
public java.lang.String getNetworkSecurityGroupRulesRequired();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#network_security_group_rules_required DatabricksWorkspace#network_security_group_rules_required}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_network_access_enabled DatabricksWorkspace#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#tags DatabricksWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceConfig.property.timeouts"></a>

```java
public DatabricksWorkspaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#timeouts DatabricksWorkspace#timeouts}

---

### DatabricksWorkspaceCustomParameters <a name="DatabricksWorkspaceCustomParameters" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceCustomParameters;

DatabricksWorkspaceCustomParameters.builder()
//  .machineLearningWorkspaceId(java.lang.String)
//  .natGatewayName(java.lang.String)
//  .noPublicIp(java.lang.Boolean)
//  .noPublicIp(IResolvable)
//  .privateSubnetName(java.lang.String)
//  .privateSubnetNetworkSecurityGroupAssociationId(java.lang.String)
//  .publicIpName(java.lang.String)
//  .publicSubnetName(java.lang.String)
//  .publicSubnetNetworkSecurityGroupAssociationId(java.lang.String)
//  .storageAccountName(java.lang.String)
//  .storageAccountSkuName(java.lang.String)
//  .virtualNetworkId(java.lang.String)
//  .vnetAddressPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName">natGatewayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp">noPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName">privateSubnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId">privateSubnetNetworkSecurityGroupAssociationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName">publicIpName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName">publicSubnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId">publicSubnetNetworkSecurityGroupAssociationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName">storageAccountSkuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix">vnetAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}. |

---

##### `machineLearningWorkspaceId`<sup>Optional</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.machineLearningWorkspaceId"></a>

```java
public java.lang.String getMachineLearningWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#machine_learning_workspace_id DatabricksWorkspace#machine_learning_workspace_id}.

---

##### `natGatewayName`<sup>Optional</sup> <a name="natGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.natGatewayName"></a>

```java
public java.lang.String getNatGatewayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#nat_gateway_name DatabricksWorkspace#nat_gateway_name}.

---

##### `noPublicIp`<sup>Optional</sup> <a name="noPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.noPublicIp"></a>

```java
public java.lang.Object getNoPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#no_public_ip DatabricksWorkspace#no_public_ip}.

---

##### `privateSubnetName`<sup>Optional</sup> <a name="privateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetName"></a>

```java
public java.lang.String getPrivateSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#private_subnet_name DatabricksWorkspace#private_subnet_name}.

---

##### `privateSubnetNetworkSecurityGroupAssociationId`<sup>Optional</sup> <a name="privateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```java
public java.lang.String getPrivateSubnetNetworkSecurityGroupAssociationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#private_subnet_network_security_group_association_id DatabricksWorkspace#private_subnet_network_security_group_association_id}.

---

##### `publicIpName`<sup>Optional</sup> <a name="publicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicIpName"></a>

```java
public java.lang.String getPublicIpName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_ip_name DatabricksWorkspace#public_ip_name}.

---

##### `publicSubnetName`<sup>Optional</sup> <a name="publicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetName"></a>

```java
public java.lang.String getPublicSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_subnet_name DatabricksWorkspace#public_subnet_name}.

---

##### `publicSubnetNetworkSecurityGroupAssociationId`<sup>Optional</sup> <a name="publicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```java
public java.lang.String getPublicSubnetNetworkSecurityGroupAssociationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#public_subnet_network_security_group_association_id DatabricksWorkspace#public_subnet_network_security_group_association_id}.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#storage_account_name DatabricksWorkspace#storage_account_name}.

---

##### `storageAccountSkuName`<sup>Optional</sup> <a name="storageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.storageAccountSkuName"></a>

```java
public java.lang.String getStorageAccountSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#storage_account_sku_name DatabricksWorkspace#storage_account_sku_name}.

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#virtual_network_id DatabricksWorkspace#virtual_network_id}.

---

##### `vnetAddressPrefix`<sup>Optional</sup> <a name="vnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters.property.vnetAddressPrefix"></a>

```java
public java.lang.String getVnetAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#vnet_address_prefix DatabricksWorkspace#vnet_address_prefix}.

---

### DatabricksWorkspaceManagedDiskIdentity <a name="DatabricksWorkspaceManagedDiskIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceManagedDiskIdentity;

DatabricksWorkspaceManagedDiskIdentity.builder()
    .build();
```


### DatabricksWorkspaceStorageAccountIdentity <a name="DatabricksWorkspaceStorageAccountIdentity" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceStorageAccountIdentity;

DatabricksWorkspaceStorageAccountIdentity.builder()
    .build();
```


### DatabricksWorkspaceTimeouts <a name="DatabricksWorkspaceTimeouts" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceTimeouts;

DatabricksWorkspaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#create DatabricksWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#delete DatabricksWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#read DatabricksWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/databricks_workspace#update DatabricksWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceCustomParametersOutputReference <a name="DatabricksWorkspaceCustomParametersOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceCustomParametersOutputReference;

new DatabricksWorkspaceCustomParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId">resetMachineLearningWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName">resetNatGatewayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp">resetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName">resetPrivateSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId">resetPrivateSubnetNetworkSecurityGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName">resetPublicIpName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName">resetPublicSubnetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId">resetPublicSubnetNetworkSecurityGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName">resetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName">resetStorageAccountSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix">resetVnetAddressPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMachineLearningWorkspaceId` <a name="resetMachineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetMachineLearningWorkspaceId"></a>

```java
public void resetMachineLearningWorkspaceId()
```

##### `resetNatGatewayName` <a name="resetNatGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNatGatewayName"></a>

```java
public void resetNatGatewayName()
```

##### `resetNoPublicIp` <a name="resetNoPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetNoPublicIp"></a>

```java
public void resetNoPublicIp()
```

##### `resetPrivateSubnetName` <a name="resetPrivateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetName"></a>

```java
public void resetPrivateSubnetName()
```

##### `resetPrivateSubnetNetworkSecurityGroupAssociationId` <a name="resetPrivateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPrivateSubnetNetworkSecurityGroupAssociationId"></a>

```java
public void resetPrivateSubnetNetworkSecurityGroupAssociationId()
```

##### `resetPublicIpName` <a name="resetPublicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicIpName"></a>

```java
public void resetPublicIpName()
```

##### `resetPublicSubnetName` <a name="resetPublicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetName"></a>

```java
public void resetPublicSubnetName()
```

##### `resetPublicSubnetNetworkSecurityGroupAssociationId` <a name="resetPublicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetPublicSubnetNetworkSecurityGroupAssociationId"></a>

```java
public void resetPublicSubnetNetworkSecurityGroupAssociationId()
```

##### `resetStorageAccountName` <a name="resetStorageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountName"></a>

```java
public void resetStorageAccountName()
```

##### `resetStorageAccountSkuName` <a name="resetStorageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetStorageAccountSkuName"></a>

```java
public void resetStorageAccountSkuName()
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVirtualNetworkId"></a>

```java
public void resetVirtualNetworkId()
```

##### `resetVnetAddressPrefix` <a name="resetVnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.resetVnetAddressPrefix"></a>

```java
public void resetVnetAddressPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput">machineLearningWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput">natGatewayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput">noPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput">privateSubnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput">privateSubnetNetworkSecurityGroupAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput">publicIpNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput">publicSubnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput">publicSubnetNetworkSecurityGroupAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput">storageAccountSkuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput">vnetAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId">machineLearningWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName">natGatewayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp">noPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName">privateSubnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId">privateSubnetNetworkSecurityGroupAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName">publicIpName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName">publicSubnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId">publicSubnetNetworkSecurityGroupAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName">storageAccountSkuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix">vnetAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="machineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceIdInput"></a>

```java
public java.lang.String getMachineLearningWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `natGatewayNameInput`<sup>Optional</sup> <a name="natGatewayNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayNameInput"></a>

```java
public java.lang.String getNatGatewayNameInput();
```

- *Type:* java.lang.String

---

##### `noPublicIpInput`<sup>Optional</sup> <a name="noPublicIpInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIpInput"></a>

```java
public java.lang.Object getNoPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateSubnetNameInput`<sup>Optional</sup> <a name="privateSubnetNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNameInput"></a>

```java
public java.lang.String getPrivateSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `privateSubnetNetworkSecurityGroupAssociationIdInput`<sup>Optional</sup> <a name="privateSubnetNetworkSecurityGroupAssociationIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationIdInput"></a>

```java
public java.lang.String getPrivateSubnetNetworkSecurityGroupAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `publicIpNameInput`<sup>Optional</sup> <a name="publicIpNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpNameInput"></a>

```java
public java.lang.String getPublicIpNameInput();
```

- *Type:* java.lang.String

---

##### `publicSubnetNameInput`<sup>Optional</sup> <a name="publicSubnetNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNameInput"></a>

```java
public java.lang.String getPublicSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `publicSubnetNetworkSecurityGroupAssociationIdInput`<sup>Optional</sup> <a name="publicSubnetNetworkSecurityGroupAssociationIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationIdInput"></a>

```java
public java.lang.String getPublicSubnetNetworkSecurityGroupAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountNameInput"></a>

```java
public java.lang.String getStorageAccountNameInput();
```

- *Type:* java.lang.String

---

##### `storageAccountSkuNameInput`<sup>Optional</sup> <a name="storageAccountSkuNameInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuNameInput"></a>

```java
public java.lang.String getStorageAccountSkuNameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkIdInput"></a>

```java
public java.lang.String getVirtualNetworkIdInput();
```

- *Type:* java.lang.String

---

##### `vnetAddressPrefixInput`<sup>Optional</sup> <a name="vnetAddressPrefixInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefixInput"></a>

```java
public java.lang.String getVnetAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `machineLearningWorkspaceId`<sup>Required</sup> <a name="machineLearningWorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.machineLearningWorkspaceId"></a>

```java
public java.lang.String getMachineLearningWorkspaceId();
```

- *Type:* java.lang.String

---

##### `natGatewayName`<sup>Required</sup> <a name="natGatewayName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.natGatewayName"></a>

```java
public java.lang.String getNatGatewayName();
```

- *Type:* java.lang.String

---

##### `noPublicIp`<sup>Required</sup> <a name="noPublicIp" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.noPublicIp"></a>

```java
public java.lang.Object getNoPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateSubnetName`<sup>Required</sup> <a name="privateSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetName"></a>

```java
public java.lang.String getPrivateSubnetName();
```

- *Type:* java.lang.String

---

##### `privateSubnetNetworkSecurityGroupAssociationId`<sup>Required</sup> <a name="privateSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.privateSubnetNetworkSecurityGroupAssociationId"></a>

```java
public java.lang.String getPrivateSubnetNetworkSecurityGroupAssociationId();
```

- *Type:* java.lang.String

---

##### `publicIpName`<sup>Required</sup> <a name="publicIpName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicIpName"></a>

```java
public java.lang.String getPublicIpName();
```

- *Type:* java.lang.String

---

##### `publicSubnetName`<sup>Required</sup> <a name="publicSubnetName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetName"></a>

```java
public java.lang.String getPublicSubnetName();
```

- *Type:* java.lang.String

---

##### `publicSubnetNetworkSecurityGroupAssociationId`<sup>Required</sup> <a name="publicSubnetNetworkSecurityGroupAssociationId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.publicSubnetNetworkSecurityGroupAssociationId"></a>

```java
public java.lang.String getPublicSubnetNetworkSecurityGroupAssociationId();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `storageAccountSkuName`<sup>Required</sup> <a name="storageAccountSkuName" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.storageAccountSkuName"></a>

```java
public java.lang.String getStorageAccountSkuName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.virtualNetworkId"></a>

```java
public java.lang.String getVirtualNetworkId();
```

- *Type:* java.lang.String

---

##### `vnetAddressPrefix`<sup>Required</sup> <a name="vnetAddressPrefix" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.vnetAddressPrefix"></a>

```java
public java.lang.String getVnetAddressPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParametersOutputReference.property.internalValue"></a>

```java
public DatabricksWorkspaceCustomParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceCustomParameters">DatabricksWorkspaceCustomParameters</a>

---


### DatabricksWorkspaceManagedDiskIdentityList <a name="DatabricksWorkspaceManagedDiskIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceManagedDiskIdentityList;

new DatabricksWorkspaceManagedDiskIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get"></a>

```java
public DatabricksWorkspaceManagedDiskIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabricksWorkspaceManagedDiskIdentityOutputReference <a name="DatabricksWorkspaceManagedDiskIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceManagedDiskIdentityOutputReference;

new DatabricksWorkspaceManagedDiskIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentityOutputReference.property.internalValue"></a>

```java
public DatabricksWorkspaceManagedDiskIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceManagedDiskIdentity">DatabricksWorkspaceManagedDiskIdentity</a>

---


### DatabricksWorkspaceStorageAccountIdentityList <a name="DatabricksWorkspaceStorageAccountIdentityList" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceStorageAccountIdentityList;

new DatabricksWorkspaceStorageAccountIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get"></a>

```java
public DatabricksWorkspaceStorageAccountIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabricksWorkspaceStorageAccountIdentityOutputReference <a name="DatabricksWorkspaceStorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceStorageAccountIdentityOutputReference;

new DatabricksWorkspaceStorageAccountIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentityOutputReference.property.internalValue"></a>

```java
public DatabricksWorkspaceStorageAccountIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceStorageAccountIdentity">DatabricksWorkspaceStorageAccountIdentity</a>

---


### DatabricksWorkspaceTimeoutsOutputReference <a name="DatabricksWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.databricks_workspace.DatabricksWorkspaceTimeoutsOutputReference;

new DatabricksWorkspaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.databricksWorkspace.DatabricksWorkspaceTimeouts">DatabricksWorkspaceTimeouts</a>

---



