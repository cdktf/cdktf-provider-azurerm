# `synapseIntegrationRuntimeAzure` Submodule <a name="`synapseIntegrationRuntimeAzure` Submodule" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseIntegrationRuntimeAzure <a name="SynapseIntegrationRuntimeAzure" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure azurerm_synapse_integration_runtime_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzure;

SynapseIntegrationRuntimeAzure.Builder.create(Construct scope, java.lang.String id)
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
    .synapseWorkspaceId(java.lang.String)
//  .computeType(java.lang.String)
//  .coreCount(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SynapseIntegrationRuntimeAzureTimeouts)
//  .timeToLiveMin(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.timeToLiveMin">timeToLiveMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.computeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}.

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.coreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#timeouts SynapseIntegrationRuntimeAzure#timeouts}

---

##### `timeToLiveMin`<sup>Optional</sup> <a name="timeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.Initializer.parameter.timeToLiveMin"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeToLiveMin">resetTimeToLiveMin</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts"></a>

```java
public void putTimeouts(SynapseIntegrationRuntimeAzureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---

##### `resetComputeType` <a name="resetComputeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetComputeType"></a>

```java
public void resetComputeType()
```

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetCoreCount"></a>

```java
public void resetCoreCount()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeToLiveMin` <a name="resetTimeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.resetTimeToLiveMin"></a>

```java
public void resetTimeToLiveMin()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzure;

SynapseIntegrationRuntimeAzure.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzure;

SynapseIntegrationRuntimeAzure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzure;

SynapseIntegrationRuntimeAzure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzure;

SynapseIntegrationRuntimeAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseIntegrationRuntimeAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SynapseIntegrationRuntimeAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseIntegrationRuntimeAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseIntegrationRuntimeAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SynapseIntegrationRuntimeAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference">SynapseIntegrationRuntimeAzureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCountInput">coreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMinInput">timeToLiveMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMin">timeToLiveMin</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeouts"></a>

```java
public SynapseIntegrationRuntimeAzureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference">SynapseIntegrationRuntimeAzureTimeoutsOutputReference</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCountInput"></a>

```java
public java.lang.Number getCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceIdInput"></a>

```java
public java.lang.String getSynapseWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---

##### `timeToLiveMinInput`<sup>Optional</sup> <a name="timeToLiveMinInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMinInput"></a>

```java
public java.lang.Number getTimeToLiveMinInput();
```

- *Type:* java.lang.Number

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

---

##### `timeToLiveMin`<sup>Required</sup> <a name="timeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.timeToLiveMin"></a>

```java
public java.lang.Number getTimeToLiveMin();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseIntegrationRuntimeAzureConfig <a name="SynapseIntegrationRuntimeAzureConfig" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzureConfig;

SynapseIntegrationRuntimeAzureConfig.builder()
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
    .synapseWorkspaceId(java.lang.String)
//  .computeType(java.lang.String)
//  .coreCount(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SynapseIntegrationRuntimeAzureTimeouts)
//  .timeToLiveMin(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.computeType">computeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeToLiveMin">timeToLiveMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#location SynapseIntegrationRuntimeAzure#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#name SynapseIntegrationRuntimeAzure#name}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#synapse_workspace_id SynapseIntegrationRuntimeAzure#synapse_workspace_id}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#compute_type SynapseIntegrationRuntimeAzure#compute_type}.

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#core_count SynapseIntegrationRuntimeAzure#core_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#description SynapseIntegrationRuntimeAzure#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#id SynapseIntegrationRuntimeAzure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeouts"></a>

```java
public SynapseIntegrationRuntimeAzureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#timeouts SynapseIntegrationRuntimeAzure#timeouts}

---

##### `timeToLiveMin`<sup>Optional</sup> <a name="timeToLiveMin" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureConfig.property.timeToLiveMin"></a>

```java
public java.lang.Number getTimeToLiveMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#time_to_live_min SynapseIntegrationRuntimeAzure#time_to_live_min}.

---

### SynapseIntegrationRuntimeAzureTimeouts <a name="SynapseIntegrationRuntimeAzureTimeouts" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzureTimeouts;

SynapseIntegrationRuntimeAzureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#create SynapseIntegrationRuntimeAzure#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#delete SynapseIntegrationRuntimeAzure#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#read SynapseIntegrationRuntimeAzure#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#update SynapseIntegrationRuntimeAzure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#create SynapseIntegrationRuntimeAzure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#delete SynapseIntegrationRuntimeAzure#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#read SynapseIntegrationRuntimeAzure#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/synapse_integration_runtime_azure#update SynapseIntegrationRuntimeAzure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseIntegrationRuntimeAzureTimeoutsOutputReference <a name="SynapseIntegrationRuntimeAzureTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.synapse_integration_runtime_azure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference;

new SynapseIntegrationRuntimeAzureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.synapseIntegrationRuntimeAzure.SynapseIntegrationRuntimeAzureTimeouts">SynapseIntegrationRuntimeAzureTimeouts</a>

---



