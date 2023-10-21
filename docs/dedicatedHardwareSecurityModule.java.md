# `azurerm_dedicated_hardware_security_module`

Refer to the Terraform Registory for docs: [`azurerm_dedicated_hardware_security_module`](https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module).

# `dedicatedHardwareSecurityModule` Submodule <a name="`dedicatedHardwareSecurityModule` Submodule" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DedicatedHardwareSecurityModule <a name="DedicatedHardwareSecurityModule" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module azurerm_dedicated_hardware_security_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModule;

DedicatedHardwareSecurityModule.Builder.create(Construct scope, java.lang.String id)
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
    .networkProfile(DedicatedHardwareSecurityModuleNetworkProfile)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .id(java.lang.String)
//  .managementNetworkProfile(DedicatedHardwareSecurityModuleManagementNetworkProfile)
//  .stampId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DedicatedHardwareSecurityModuleTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.managementNetworkProfile">managementNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | management_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.stampId">stampId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.networkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#network_profile DedicatedHardwareSecurityModule#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementNetworkProfile`<sup>Optional</sup> <a name="managementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.managementNetworkProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

management_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#management_network_profile DedicatedHardwareSecurityModule#management_network_profile}

---

##### `stampId`<sup>Optional</sup> <a name="stampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.stampId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#timeouts DedicatedHardwareSecurityModule#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile">putManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile">putNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetManagementNetworkProfile">resetManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetStampId">resetStampId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putManagementNetworkProfile` <a name="putManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile"></a>

```java
public void putManagementNetworkProfile(DedicatedHardwareSecurityModuleManagementNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putManagementNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---

##### `putNetworkProfile` <a name="putNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile"></a>

```java
public void putNetworkProfile(DedicatedHardwareSecurityModuleNetworkProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts"></a>

```java
public void putTimeouts(DedicatedHardwareSecurityModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetId"></a>

```java
public void resetId()
```

##### `resetManagementNetworkProfile` <a name="resetManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetManagementNetworkProfile"></a>

```java
public void resetManagementNetworkProfile()
```

##### `resetStampId` <a name="resetStampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetStampId"></a>

```java
public void resetStampId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DedicatedHardwareSecurityModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModule;

DedicatedHardwareSecurityModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModule;

DedicatedHardwareSecurityModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModule;

DedicatedHardwareSecurityModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModule;

DedicatedHardwareSecurityModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DedicatedHardwareSecurityModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DedicatedHardwareSecurityModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DedicatedHardwareSecurityModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DedicatedHardwareSecurityModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DedicatedHardwareSecurityModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfile">managementNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference">DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference">DedicatedHardwareSecurityModuleNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference">DedicatedHardwareSecurityModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfileInput">managementNetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfileInput">networkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampIdInput">stampIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampId">stampId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managementNetworkProfile`<sup>Required</sup> <a name="managementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfile"></a>

```java
public DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference getManagementNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference">DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference</a>

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfile"></a>

```java
public DedicatedHardwareSecurityModuleNetworkProfileOutputReference getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference">DedicatedHardwareSecurityModuleNetworkProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeouts"></a>

```java
public DedicatedHardwareSecurityModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference">DedicatedHardwareSecurityModuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managementNetworkProfileInput`<sup>Optional</sup> <a name="managementNetworkProfileInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.managementNetworkProfileInput"></a>

```java
public DedicatedHardwareSecurityModuleManagementNetworkProfile getManagementNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.networkProfileInput"></a>

```java
public DedicatedHardwareSecurityModuleNetworkProfile getNetworkProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `stampIdInput`<sup>Optional</sup> <a name="stampIdInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampIdInput"></a>

```java
public java.lang.String getStampIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `stampId`<sup>Required</sup> <a name="stampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.stampId"></a>

```java
public java.lang.String getStampId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DedicatedHardwareSecurityModuleConfig <a name="DedicatedHardwareSecurityModuleConfig" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleConfig;

DedicatedHardwareSecurityModuleConfig.builder()
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
    .networkProfile(DedicatedHardwareSecurityModuleNetworkProfile)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .id(java.lang.String)
//  .managementNetworkProfile(DedicatedHardwareSecurityModuleManagementNetworkProfile)
//  .stampId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DedicatedHardwareSecurityModuleTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.networkProfile">networkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.managementNetworkProfile">managementNetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | management_network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.stampId">stampId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#location DedicatedHardwareSecurityModule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#name DedicatedHardwareSecurityModule#name}.

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.networkProfile"></a>

```java
public DedicatedHardwareSecurityModuleNetworkProfile getNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#network_profile DedicatedHardwareSecurityModule#network_profile}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#resource_group_name DedicatedHardwareSecurityModule#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#sku_name DedicatedHardwareSecurityModule#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#id DedicatedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managementNetworkProfile`<sup>Optional</sup> <a name="managementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.managementNetworkProfile"></a>

```java
public DedicatedHardwareSecurityModuleManagementNetworkProfile getManagementNetworkProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

management_network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#management_network_profile DedicatedHardwareSecurityModule#management_network_profile}

---

##### `stampId`<sup>Optional</sup> <a name="stampId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.stampId"></a>

```java
public java.lang.String getStampId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#stamp_id DedicatedHardwareSecurityModule#stamp_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#tags DedicatedHardwareSecurityModule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.timeouts"></a>

```java
public DedicatedHardwareSecurityModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#timeouts DedicatedHardwareSecurityModule#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#zones DedicatedHardwareSecurityModule#zones}.

---

### DedicatedHardwareSecurityModuleManagementNetworkProfile <a name="DedicatedHardwareSecurityModuleManagementNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleManagementNetworkProfile;

DedicatedHardwareSecurityModuleManagementNetworkProfile.builder()
    .networkInterfacePrivateIpAddresses(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}. |

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.networkInterfacePrivateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfacePrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

### DedicatedHardwareSecurityModuleNetworkProfile <a name="DedicatedHardwareSecurityModuleNetworkProfile" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleNetworkProfile;

DedicatedHardwareSecurityModuleNetworkProfile.builder()
    .networkInterfacePrivateIpAddresses(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}. |

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.networkInterfacePrivateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfacePrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#network_interface_private_ip_addresses DedicatedHardwareSecurityModule#network_interface_private_ip_addresses}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#subnet_id DedicatedHardwareSecurityModule#subnet_id}.

---

### DedicatedHardwareSecurityModuleTimeouts <a name="DedicatedHardwareSecurityModuleTimeouts" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleTimeouts;

DedicatedHardwareSecurityModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#create DedicatedHardwareSecurityModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#delete DedicatedHardwareSecurityModule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#read DedicatedHardwareSecurityModule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.77.0/docs/resources/dedicated_hardware_security_module#update DedicatedHardwareSecurityModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference <a name="DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference;

new DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput">networkInterfacePrivateIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterfacePrivateIpAddressesInput`<sup>Optional</sup> <a name="networkInterfacePrivateIpAddressesInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfacePrivateIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfacePrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfileOutputReference.property.internalValue"></a>

```java
public DedicatedHardwareSecurityModuleManagementNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleManagementNetworkProfile">DedicatedHardwareSecurityModuleManagementNetworkProfile</a>

---


### DedicatedHardwareSecurityModuleNetworkProfileOutputReference <a name="DedicatedHardwareSecurityModuleNetworkProfileOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleNetworkProfileOutputReference;

new DedicatedHardwareSecurityModuleNetworkProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput">networkInterfacePrivateIpAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses">networkInterfacePrivateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterfacePrivateIpAddressesInput`<sup>Optional</sup> <a name="networkInterfacePrivateIpAddressesInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddressesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfacePrivateIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `networkInterfacePrivateIpAddresses`<sup>Required</sup> <a name="networkInterfacePrivateIpAddresses" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.networkInterfacePrivateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getNetworkInterfacePrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfileOutputReference.property.internalValue"></a>

```java
public DedicatedHardwareSecurityModuleNetworkProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleNetworkProfile">DedicatedHardwareSecurityModuleNetworkProfile</a>

---


### DedicatedHardwareSecurityModuleTimeoutsOutputReference <a name="DedicatedHardwareSecurityModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.dedicated_hardware_security_module.DedicatedHardwareSecurityModuleTimeoutsOutputReference;

new DedicatedHardwareSecurityModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dedicatedHardwareSecurityModule.DedicatedHardwareSecurityModuleTimeouts">DedicatedHardwareSecurityModuleTimeouts</a>

---



