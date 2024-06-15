# `containerAppEnvironmentDaprComponent` Submodule <a name="`containerAppEnvironmentDaprComponent` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentDaprComponent <a name="ContainerAppEnvironmentDaprComponent" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component azurerm_container_app_environment_dapr_component}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponent;

ContainerAppEnvironmentDaprComponent.Builder.create(Construct scope, java.lang.String id)
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
    .componentType(java.lang.String)
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .ignoreErrors(java.lang.Boolean)
//  .ignoreErrors(IResolvable)
//  .initTimeout(java.lang.String)
//  .metadata(IResolvable)
//  .metadata(java.util.List<ContainerAppEnvironmentDaprComponentMetadata>)
//  .scopes(java.util.List<java.lang.String>)
//  .secret(IResolvable)
//  .secret(java.util.List<ContainerAppEnvironmentDaprComponentSecret>)
//  .timeouts(ContainerAppEnvironmentDaprComponentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.componentType">componentType</a></code> | <code>java.lang.String</code> | The Dapr Component Type. For example `state.azure.blobstorage`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The Container App Managed Environment ID to configure this Dapr component on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for this Dapr Component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The version of the component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.ignoreErrors">ignoreErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.initTimeout">initTimeout</a></code> | <code>java.lang.String</code> | The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.componentType"></a>

- *Type:* java.lang.String

The Dapr Component Type. For example `state.azure.blobstorage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#component_type ContainerAppEnvironmentDaprComponent#component_type}

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* java.lang.String

The Container App Managed Environment ID to configure this Dapr component on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#container_app_environment_id ContainerAppEnvironmentDaprComponent#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for this Dapr Component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#version ContainerAppEnvironmentDaprComponent#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.ignoreErrors"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#ignore_errors ContainerAppEnvironmentDaprComponent#ignore_errors}

---

##### `initTimeout`<sup>Optional</sup> <a name="initTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.initTimeout"></a>

- *Type:* java.lang.String

The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#init_timeout ContainerAppEnvironmentDaprComponent#init_timeout}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.metadata"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#metadata ContainerAppEnvironmentDaprComponent#metadata}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#scopes ContainerAppEnvironmentDaprComponent#scopes}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.secret"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#secret ContainerAppEnvironmentDaprComponent#secret}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#timeouts ContainerAppEnvironmentDaprComponent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetIgnoreErrors">resetIgnoreErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetInitTimeout">resetInitTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata"></a>

```java
public void putMetadata(IResolvable OR java.util.List<ContainerAppEnvironmentDaprComponentMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putMetadata.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret"></a>

```java
public void putSecret(IResolvable OR java.util.List<ContainerAppEnvironmentDaprComponentSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts"></a>

```java
public void putTimeouts(ContainerAppEnvironmentDaprComponentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreErrors` <a name="resetIgnoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetIgnoreErrors"></a>

```java
public void resetIgnoreErrors()
```

##### `resetInitTimeout` <a name="resetInitTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetInitTimeout"></a>

```java
public void resetInitTimeout()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetSecret"></a>

```java
public void resetSecret()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponent;

ContainerAppEnvironmentDaprComponent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponent;

ContainerAppEnvironmentDaprComponent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponent;

ContainerAppEnvironmentDaprComponent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponent;

ContainerAppEnvironmentDaprComponent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAppEnvironmentDaprComponent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerAppEnvironmentDaprComponent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAppEnvironmentDaprComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAppEnvironmentDaprComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentDaprComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList">ContainerAppEnvironmentDaprComponentMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList">ContainerAppEnvironmentDaprComponentSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference">ContainerAppEnvironmentDaprComponentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentTypeInput">componentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrorsInput">ignoreErrorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeoutInput">initTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadataInput">metadataInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentType">componentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrors">ignoreErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeout">initTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadata"></a>

```java
public ContainerAppEnvironmentDaprComponentMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList">ContainerAppEnvironmentDaprComponentMetadataList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secret"></a>

```java
public ContainerAppEnvironmentDaprComponentSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList">ContainerAppEnvironmentDaprComponentSecretList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeouts"></a>

```java
public ContainerAppEnvironmentDaprComponentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference">ContainerAppEnvironmentDaprComponentTimeoutsOutputReference</a>

---

##### `componentTypeInput`<sup>Optional</sup> <a name="componentTypeInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentTypeInput"></a>

```java
public java.lang.String getComponentTypeInput();
```

- *Type:* java.lang.String

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentIdInput"></a>

```java
public java.lang.String getContainerAppEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreErrorsInput`<sup>Optional</sup> <a name="ignoreErrorsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrorsInput"></a>

```java
public java.lang.Object getIgnoreErrorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `initTimeoutInput`<sup>Optional</sup> <a name="initTimeoutInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeoutInput"></a>

```java
public java.lang.String getInitTimeoutInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.metadataInput"></a>

```java
public java.lang.Object getMetadataInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.secretInput"></a>

```java
public java.lang.Object getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreErrors`<sup>Required</sup> <a name="ignoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.ignoreErrors"></a>

```java
public java.lang.Object getIgnoreErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `initTimeout`<sup>Required</sup> <a name="initTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.initTimeout"></a>

```java
public java.lang.String getInitTimeout();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentDaprComponentConfig <a name="ContainerAppEnvironmentDaprComponentConfig" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentConfig;

ContainerAppEnvironmentDaprComponentConfig.builder()
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
    .componentType(java.lang.String)
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .ignoreErrors(java.lang.Boolean)
//  .ignoreErrors(IResolvable)
//  .initTimeout(java.lang.String)
//  .metadata(IResolvable)
//  .metadata(java.util.List<ContainerAppEnvironmentDaprComponentMetadata>)
//  .scopes(java.util.List<java.lang.String>)
//  .secret(IResolvable)
//  .secret(java.util.List<ContainerAppEnvironmentDaprComponentSecret>)
//  .timeouts(ContainerAppEnvironmentDaprComponentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.componentType">componentType</a></code> | <code>java.lang.String</code> | The Dapr Component Type. For example `state.azure.blobstorage`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The Container App Managed Environment ID to configure this Dapr component on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for this Dapr Component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.version">version</a></code> | <code>java.lang.String</code> | The version of the component. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.ignoreErrors">ignoreErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.initTimeout">initTimeout</a></code> | <code>java.lang.String</code> | The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>></code> | metadata block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>></code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

The Dapr Component Type. For example `state.azure.blobstorage`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#component_type ContainerAppEnvironmentDaprComponent#component_type}

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

The Container App Managed Environment ID to configure this Dapr component on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#container_app_environment_id ContainerAppEnvironmentDaprComponent#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this Dapr Component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#version ContainerAppEnvironmentDaprComponent#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#id ContainerAppEnvironmentDaprComponent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreErrors`<sup>Optional</sup> <a name="ignoreErrors" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.ignoreErrors"></a>

```java
public java.lang.Object getIgnoreErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Should the Dapr sidecar to continue initialisation if the component fails to load. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#ignore_errors ContainerAppEnvironmentDaprComponent#ignore_errors}

---

##### `initTimeout`<sup>Optional</sup> <a name="initTimeout" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.initTimeout"></a>

```java
public java.lang.String getInitTimeout();
```

- *Type:* java.lang.String

The component initialisation timeout in ISO8601 format. e.g. `5s`, `2h`, `1m`. Defaults to `5s`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#init_timeout ContainerAppEnvironmentDaprComponent#init_timeout}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.metadata"></a>

```java
public java.lang.Object getMetadata();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#metadata ContainerAppEnvironmentDaprComponent#metadata}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

A list of scopes to which this component applies. e.g. a Container App's `dapr.app_id` value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#scopes ContainerAppEnvironmentDaprComponent#scopes}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.secret"></a>

```java
public java.lang.Object getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#secret ContainerAppEnvironmentDaprComponent#secret}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentConfig.property.timeouts"></a>

```java
public ContainerAppEnvironmentDaprComponentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#timeouts ContainerAppEnvironmentDaprComponent#timeouts}

---

### ContainerAppEnvironmentDaprComponentMetadata <a name="ContainerAppEnvironmentDaprComponentMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentMetadata;

ContainerAppEnvironmentDaprComponentMetadata.builder()
    .name(java.lang.String)
//  .secretName(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Metadata configuration item. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.value">value</a></code> | <code>java.lang.String</code> | The value for this metadata configuration item. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The name of a secret specified in the `secrets` block that contains the value for this metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#secret_name ContainerAppEnvironmentDaprComponent#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for this metadata configuration item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}

---

### ContainerAppEnvironmentDaprComponentSecret <a name="ContainerAppEnvironmentDaprComponentSecret" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentSecret;

ContainerAppEnvironmentDaprComponentSecret.builder()
    .name(java.lang.String)
//  .identity(java.lang.String)
//  .keyVaultSecretId(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.name">name</a></code> | <code>java.lang.String</code> | The secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.identity">identity</a></code> | <code>java.lang.String</code> | The identity to use for accessing key vault reference. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>java.lang.String</code> | The Key Vault Secret ID. Could be either one of `id` or `versionless_id`. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.value">value</a></code> | <code>java.lang.String</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#name ContainerAppEnvironmentDaprComponent#name}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

The identity to use for accessing key vault reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#identity ContainerAppEnvironmentDaprComponent#identity}

---

##### `keyVaultSecretId`<sup>Optional</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.keyVaultSecretId"></a>

```java
public java.lang.String getKeyVaultSecretId();
```

- *Type:* java.lang.String

The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#key_vault_secret_id ContainerAppEnvironmentDaprComponent#key_vault_secret_id}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#value ContainerAppEnvironmentDaprComponent#value}

---

### ContainerAppEnvironmentDaprComponentTimeouts <a name="ContainerAppEnvironmentDaprComponentTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentTimeouts;

ContainerAppEnvironmentDaprComponentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#create ContainerAppEnvironmentDaprComponent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#delete ContainerAppEnvironmentDaprComponent#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#read ContainerAppEnvironmentDaprComponent#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/container_app_environment_dapr_component#update ContainerAppEnvironmentDaprComponent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentDaprComponentMetadataList <a name="ContainerAppEnvironmentDaprComponentMetadataList" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentMetadataList;

new ContainerAppEnvironmentDaprComponentMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get"></a>

```java
public ContainerAppEnvironmentDaprComponentMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>>

---


### ContainerAppEnvironmentDaprComponentMetadataOutputReference <a name="ContainerAppEnvironmentDaprComponentMetadataOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentMetadataOutputReference;

new ContainerAppEnvironmentDaprComponentMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadataOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentMetadata">ContainerAppEnvironmentDaprComponentMetadata</a>

---


### ContainerAppEnvironmentDaprComponentSecretList <a name="ContainerAppEnvironmentDaprComponentSecretList" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentSecretList;

new ContainerAppEnvironmentDaprComponentSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get"></a>

```java
public ContainerAppEnvironmentDaprComponentSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>>

---


### ContainerAppEnvironmentDaprComponentSecretOutputReference <a name="ContainerAppEnvironmentDaprComponentSecretOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentSecretOutputReference;

new ContainerAppEnvironmentDaprComponentSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetKeyVaultSecretId">resetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetKeyVaultSecretId` <a name="resetKeyVaultSecretId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetKeyVaultSecretId"></a>

```java
public void resetKeyVaultSecretId()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identityInput">identityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretIdInput">keyVaultSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identity">identity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identityInput"></a>

```java
public java.lang.String getIdentityInput();
```

- *Type:* java.lang.String

---

##### `keyVaultSecretIdInput`<sup>Optional</sup> <a name="keyVaultSecretIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretIdInput"></a>

```java
public java.lang.String getKeyVaultSecretIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.identity"></a>

```java
public java.lang.String getIdentity();
```

- *Type:* java.lang.String

---

##### `keyVaultSecretId`<sup>Required</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.keyVaultSecretId"></a>

```java
public java.lang.String getKeyVaultSecretId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecretOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentSecret">ContainerAppEnvironmentDaprComponentSecret</a>

---


### ContainerAppEnvironmentDaprComponentTimeoutsOutputReference <a name="ContainerAppEnvironmentDaprComponentTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_app_environment_dapr_component.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference;

new ContainerAppEnvironmentDaprComponentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerAppEnvironmentDaprComponent.ContainerAppEnvironmentDaprComponentTimeouts">ContainerAppEnvironmentDaprComponentTimeouts</a>

---



