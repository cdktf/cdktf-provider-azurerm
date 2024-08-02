# `synapseWorkspaceAadAdmin` Submodule <a name="`synapseWorkspaceAadAdmin` Submodule" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceAadAdminA <a name="SynapseWorkspaceAadAdminA" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin azurerm_synapse_workspace_aad_admin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminA;

SynapseWorkspaceAadAdminA.Builder.create(Construct scope, java.lang.String id)
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
    .login(java.lang.String)
    .objectId(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SynapseWorkspaceAadAdminTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.login"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#timeouts SynapseWorkspaceAadAdminA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts"></a>

```java
public void putTimeouts(SynapseWorkspaceAadAdminTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseWorkspaceAadAdminA resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminA;

SynapseWorkspaceAadAdminA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminA;

SynapseWorkspaceAadAdminA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminA;

SynapseWorkspaceAadAdminA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminA;

SynapseWorkspaceAadAdminA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseWorkspaceAadAdminA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SynapseWorkspaceAadAdminA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseWorkspaceAadAdminA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseWorkspaceAadAdminA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceAadAdminA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference">SynapseWorkspaceAadAdminTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.loginInput">loginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeouts"></a>

```java
public SynapseWorkspaceAadAdminTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference">SynapseWorkspaceAadAdminTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.loginInput"></a>

```java
public java.lang.String getLoginInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceIdInput"></a>

```java
public java.lang.String getSynapseWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceAadAdminAConfig <a name="SynapseWorkspaceAadAdminAConfig" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminAConfig;

SynapseWorkspaceAadAdminAConfig.builder()
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
    .login(java.lang.String)
    .objectId(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SynapseWorkspaceAadAdminTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#login SynapseWorkspaceAadAdminA#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#object_id SynapseWorkspaceAadAdminA#object_id}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#synapse_workspace_id SynapseWorkspaceAadAdminA#synapse_workspace_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#tenant_id SynapseWorkspaceAadAdminA#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#id SynapseWorkspaceAadAdminA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminAConfig.property.timeouts"></a>

```java
public SynapseWorkspaceAadAdminTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#timeouts SynapseWorkspaceAadAdminA#timeouts}

---

### SynapseWorkspaceAadAdminTimeouts <a name="SynapseWorkspaceAadAdminTimeouts" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminTimeouts;

SynapseWorkspaceAadAdminTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdminA#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdminA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdminA#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdminA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#create SynapseWorkspaceAadAdminA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#delete SynapseWorkspaceAadAdminA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#read SynapseWorkspaceAadAdminA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/synapse_workspace_aad_admin#update SynapseWorkspaceAadAdminA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceAadAdminTimeoutsOutputReference <a name="SynapseWorkspaceAadAdminTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_workspace_aad_admin.SynapseWorkspaceAadAdminTimeoutsOutputReference;

new SynapseWorkspaceAadAdminTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseWorkspaceAadAdmin.SynapseWorkspaceAadAdminTimeouts">SynapseWorkspaceAadAdminTimeouts</a>

---



