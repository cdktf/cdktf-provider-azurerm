# `virtualMachineScaleSetStandbyPool` Submodule <a name="`virtualMachineScaleSetStandbyPool` Submodule" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualMachineScaleSetStandbyPool <a name="VirtualMachineScaleSetStandbyPool" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool azurerm_virtual_machine_scale_set_standby_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPool;

VirtualMachineScaleSetStandbyPool.Builder.create(Construct scope, java.lang.String id)
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
    .attachedVirtualMachineScaleSetId(java.lang.String)
    .elasticityProfile(VirtualMachineScaleSetStandbyPoolElasticityProfile)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualMachineState(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineScaleSetStandbyPoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.attachedVirtualMachineScaleSetId">attachedVirtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#attached_virtual_machine_scale_set_id VirtualMachineScaleSetStandbyPool#attached_virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.elasticityProfile">elasticityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | elasticity_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#location VirtualMachineScaleSetStandbyPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#name VirtualMachineScaleSetStandbyPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#resource_group_name VirtualMachineScaleSetStandbyPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.virtualMachineState">virtualMachineState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#virtual_machine_state VirtualMachineScaleSetStandbyPool#virtual_machine_state}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#id VirtualMachineScaleSetStandbyPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#tags VirtualMachineScaleSetStandbyPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachedVirtualMachineScaleSetId`<sup>Required</sup> <a name="attachedVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.attachedVirtualMachineScaleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#attached_virtual_machine_scale_set_id VirtualMachineScaleSetStandbyPool#attached_virtual_machine_scale_set_id}.

---

##### `elasticityProfile`<sup>Required</sup> <a name="elasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.elasticityProfile"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

elasticity_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#elasticity_profile VirtualMachineScaleSetStandbyPool#elasticity_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#location VirtualMachineScaleSetStandbyPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#name VirtualMachineScaleSetStandbyPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#resource_group_name VirtualMachineScaleSetStandbyPool#resource_group_name}.

---

##### `virtualMachineState`<sup>Required</sup> <a name="virtualMachineState" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.virtualMachineState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#virtual_machine_state VirtualMachineScaleSetStandbyPool#virtual_machine_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#id VirtualMachineScaleSetStandbyPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#tags VirtualMachineScaleSetStandbyPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#timeouts VirtualMachineScaleSetStandbyPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putElasticityProfile">putElasticityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElasticityProfile` <a name="putElasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putElasticityProfile"></a>

```java
public void putElasticityProfile(VirtualMachineScaleSetStandbyPoolElasticityProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putElasticityProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putTimeouts"></a>

```java
public void putTimeouts(VirtualMachineScaleSetStandbyPoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualMachineScaleSetStandbyPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPool;

VirtualMachineScaleSetStandbyPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPool;

VirtualMachineScaleSetStandbyPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPool;

VirtualMachineScaleSetStandbyPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPool;

VirtualMachineScaleSetStandbyPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualMachineScaleSetStandbyPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualMachineScaleSetStandbyPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualMachineScaleSetStandbyPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualMachineScaleSetStandbyPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualMachineScaleSetStandbyPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfile">elasticityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference">VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference">VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetIdInput">attachedVirtualMachineScaleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfileInput">elasticityProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineStateInput">virtualMachineStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetId">attachedVirtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineState">virtualMachineState</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `elasticityProfile`<sup>Required</sup> <a name="elasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfile"></a>

```java
public VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference getElasticityProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference">VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeouts"></a>

```java
public VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference">VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference</a>

---

##### `attachedVirtualMachineScaleSetIdInput`<sup>Optional</sup> <a name="attachedVirtualMachineScaleSetIdInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetIdInput"></a>

```java
public java.lang.String getAttachedVirtualMachineScaleSetIdInput();
```

- *Type:* java.lang.String

---

##### `elasticityProfileInput`<sup>Optional</sup> <a name="elasticityProfileInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.elasticityProfileInput"></a>

```java
public VirtualMachineScaleSetStandbyPoolElasticityProfile getElasticityProfileInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

---

##### `virtualMachineStateInput`<sup>Optional</sup> <a name="virtualMachineStateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineStateInput"></a>

```java
public java.lang.String getVirtualMachineStateInput();
```

- *Type:* java.lang.String

---

##### `attachedVirtualMachineScaleSetId`<sup>Required</sup> <a name="attachedVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.attachedVirtualMachineScaleSetId"></a>

```java
public java.lang.String getAttachedVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `virtualMachineState`<sup>Required</sup> <a name="virtualMachineState" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.virtualMachineState"></a>

```java
public java.lang.String getVirtualMachineState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualMachineScaleSetStandbyPoolConfig <a name="VirtualMachineScaleSetStandbyPoolConfig" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPoolConfig;

VirtualMachineScaleSetStandbyPoolConfig.builder()
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
    .attachedVirtualMachineScaleSetId(java.lang.String)
    .elasticityProfile(VirtualMachineScaleSetStandbyPoolElasticityProfile)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualMachineState(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(VirtualMachineScaleSetStandbyPoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.attachedVirtualMachineScaleSetId">attachedVirtualMachineScaleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#attached_virtual_machine_scale_set_id VirtualMachineScaleSetStandbyPool#attached_virtual_machine_scale_set_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.elasticityProfile">elasticityProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | elasticity_profile block. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#location VirtualMachineScaleSetStandbyPool#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#name VirtualMachineScaleSetStandbyPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#resource_group_name VirtualMachineScaleSetStandbyPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.virtualMachineState">virtualMachineState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#virtual_machine_state VirtualMachineScaleSetStandbyPool#virtual_machine_state}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#id VirtualMachineScaleSetStandbyPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#tags VirtualMachineScaleSetStandbyPool#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachedVirtualMachineScaleSetId`<sup>Required</sup> <a name="attachedVirtualMachineScaleSetId" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.attachedVirtualMachineScaleSetId"></a>

```java
public java.lang.String getAttachedVirtualMachineScaleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#attached_virtual_machine_scale_set_id VirtualMachineScaleSetStandbyPool#attached_virtual_machine_scale_set_id}.

---

##### `elasticityProfile`<sup>Required</sup> <a name="elasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.elasticityProfile"></a>

```java
public VirtualMachineScaleSetStandbyPoolElasticityProfile getElasticityProfile();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

elasticity_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#elasticity_profile VirtualMachineScaleSetStandbyPool#elasticity_profile}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#location VirtualMachineScaleSetStandbyPool#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#name VirtualMachineScaleSetStandbyPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#resource_group_name VirtualMachineScaleSetStandbyPool#resource_group_name}.

---

##### `virtualMachineState`<sup>Required</sup> <a name="virtualMachineState" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.virtualMachineState"></a>

```java
public java.lang.String getVirtualMachineState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#virtual_machine_state VirtualMachineScaleSetStandbyPool#virtual_machine_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#id VirtualMachineScaleSetStandbyPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#tags VirtualMachineScaleSetStandbyPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolConfig.property.timeouts"></a>

```java
public VirtualMachineScaleSetStandbyPoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#timeouts VirtualMachineScaleSetStandbyPool#timeouts}

---

### VirtualMachineScaleSetStandbyPoolElasticityProfile <a name="VirtualMachineScaleSetStandbyPoolElasticityProfile" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPoolElasticityProfile;

VirtualMachineScaleSetStandbyPoolElasticityProfile.builder()
    .maxReadyCapacity(java.lang.Number)
    .minReadyCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.maxReadyCapacity">maxReadyCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#max_ready_capacity VirtualMachineScaleSetStandbyPool#max_ready_capacity}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.minReadyCapacity">minReadyCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#min_ready_capacity VirtualMachineScaleSetStandbyPool#min_ready_capacity}. |

---

##### `maxReadyCapacity`<sup>Required</sup> <a name="maxReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.maxReadyCapacity"></a>

```java
public java.lang.Number getMaxReadyCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#max_ready_capacity VirtualMachineScaleSetStandbyPool#max_ready_capacity}.

---

##### `minReadyCapacity`<sup>Required</sup> <a name="minReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile.property.minReadyCapacity"></a>

```java
public java.lang.Number getMinReadyCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#min_ready_capacity VirtualMachineScaleSetStandbyPool#min_ready_capacity}.

---

### VirtualMachineScaleSetStandbyPoolTimeouts <a name="VirtualMachineScaleSetStandbyPoolTimeouts" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPoolTimeouts;

VirtualMachineScaleSetStandbyPoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#create VirtualMachineScaleSetStandbyPool#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#delete VirtualMachineScaleSetStandbyPool#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#read VirtualMachineScaleSetStandbyPool#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#update VirtualMachineScaleSetStandbyPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#create VirtualMachineScaleSetStandbyPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#delete VirtualMachineScaleSetStandbyPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#read VirtualMachineScaleSetStandbyPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/virtual_machine_scale_set_standby_pool#update VirtualMachineScaleSetStandbyPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference <a name="VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference;

new VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacityInput">maxReadyCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacityInput">minReadyCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacity">maxReadyCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacity">minReadyCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxReadyCapacityInput`<sup>Optional</sup> <a name="maxReadyCapacityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacityInput"></a>

```java
public java.lang.Number getMaxReadyCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minReadyCapacityInput`<sup>Optional</sup> <a name="minReadyCapacityInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacityInput"></a>

```java
public java.lang.Number getMinReadyCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxReadyCapacity`<sup>Required</sup> <a name="maxReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.maxReadyCapacity"></a>

```java
public java.lang.Number getMaxReadyCapacity();
```

- *Type:* java.lang.Number

---

##### `minReadyCapacity`<sup>Required</sup> <a name="minReadyCapacity" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.minReadyCapacity"></a>

```java
public java.lang.Number getMinReadyCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfileOutputReference.property.internalValue"></a>

```java
public VirtualMachineScaleSetStandbyPoolElasticityProfile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolElasticityProfile">VirtualMachineScaleSetStandbyPoolElasticityProfile</a>

---


### VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference <a name="VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_machine_scale_set_standby_pool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference;

new VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.virtualMachineScaleSetStandbyPool.VirtualMachineScaleSetStandbyPoolTimeouts">VirtualMachineScaleSetStandbyPoolTimeouts</a>

---



