# `iothubDeviceUpdateInstance` Submodule <a name="`iothubDeviceUpdateInstance` Submodule" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubDeviceUpdateInstance <a name="IothubDeviceUpdateInstance" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance azurerm_iothub_device_update_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstance;

IothubDeviceUpdateInstance.Builder.create(Construct scope, java.lang.String id)
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
    .deviceUpdateAccountId(java.lang.String)
    .iothubId(java.lang.String)
    .name(java.lang.String)
//  .diagnosticEnabled(java.lang.Boolean)
//  .diagnosticEnabled(IResolvable)
//  .diagnosticStorageAccount(IothubDeviceUpdateInstanceDiagnosticStorageAccount)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IothubDeviceUpdateInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.deviceUpdateAccountId">deviceUpdateAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.diagnosticEnabled">diagnosticEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.diagnosticStorageAccount">diagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | diagnostic_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deviceUpdateAccountId`<sup>Required</sup> <a name="deviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.deviceUpdateAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.iothubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}.

---

##### `diagnosticEnabled`<sup>Optional</sup> <a name="diagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.diagnosticEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}.

---

##### `diagnosticStorageAccount`<sup>Optional</sup> <a name="diagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.diagnosticStorageAccount"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

diagnostic_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#diagnostic_storage_account IothubDeviceUpdateInstance#diagnostic_storage_account}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#timeouts IothubDeviceUpdateInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount">putDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticEnabled">resetDiagnosticEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticStorageAccount">resetDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiagnosticStorageAccount` <a name="putDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount"></a>

```java
public void putDiagnosticStorageAccount(IothubDeviceUpdateInstanceDiagnosticStorageAccount value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putDiagnosticStorageAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts"></a>

```java
public void putTimeouts(IothubDeviceUpdateInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

---

##### `resetDiagnosticEnabled` <a name="resetDiagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticEnabled"></a>

```java
public void resetDiagnosticEnabled()
```

##### `resetDiagnosticStorageAccount` <a name="resetDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetDiagnosticStorageAccount"></a>

```java
public void resetDiagnosticStorageAccount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstance;

IothubDeviceUpdateInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstance;

IothubDeviceUpdateInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstance;

IothubDeviceUpdateInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstance;

IothubDeviceUpdateInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IothubDeviceUpdateInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IothubDeviceUpdateInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IothubDeviceUpdateInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IothubDeviceUpdateInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IothubDeviceUpdateInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccount">diagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference">IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference">IothubDeviceUpdateInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountIdInput">deviceUpdateAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabledInput">diagnosticEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccountInput">diagnosticStorageAccountInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubIdInput">iothubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountId">deviceUpdateAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabled">diagnosticEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diagnosticStorageAccount`<sup>Required</sup> <a name="diagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccount"></a>

```java
public IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference getDiagnosticStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference">IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeouts"></a>

```java
public IothubDeviceUpdateInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference">IothubDeviceUpdateInstanceTimeoutsOutputReference</a>

---

##### `deviceUpdateAccountIdInput`<sup>Optional</sup> <a name="deviceUpdateAccountIdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountIdInput"></a>

```java
public java.lang.String getDeviceUpdateAccountIdInput();
```

- *Type:* java.lang.String

---

##### `diagnosticEnabledInput`<sup>Optional</sup> <a name="diagnosticEnabledInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabledInput"></a>

```java
public java.lang.Object getDiagnosticEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `diagnosticStorageAccountInput`<sup>Optional</sup> <a name="diagnosticStorageAccountInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticStorageAccountInput"></a>

```java
public IothubDeviceUpdateInstanceDiagnosticStorageAccount getDiagnosticStorageAccountInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubIdInput"></a>

```java
public java.lang.String getIothubIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

---

##### `deviceUpdateAccountId`<sup>Required</sup> <a name="deviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.deviceUpdateAccountId"></a>

```java
public java.lang.String getDeviceUpdateAccountId();
```

- *Type:* java.lang.String

---

##### `diagnosticEnabled`<sup>Required</sup> <a name="diagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.diagnosticEnabled"></a>

```java
public java.lang.Object getDiagnosticEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IothubDeviceUpdateInstanceConfig <a name="IothubDeviceUpdateInstanceConfig" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstanceConfig;

IothubDeviceUpdateInstanceConfig.builder()
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
    .deviceUpdateAccountId(java.lang.String)
    .iothubId(java.lang.String)
    .name(java.lang.String)
//  .diagnosticEnabled(java.lang.Boolean)
//  .diagnosticEnabled(IResolvable)
//  .diagnosticStorageAccount(IothubDeviceUpdateInstanceDiagnosticStorageAccount)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(IothubDeviceUpdateInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.deviceUpdateAccountId">deviceUpdateAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticEnabled">diagnosticEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticStorageAccount">diagnosticStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | diagnostic_storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deviceUpdateAccountId`<sup>Required</sup> <a name="deviceUpdateAccountId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.deviceUpdateAccountId"></a>

```java
public java.lang.String getDeviceUpdateAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#device_update_account_id IothubDeviceUpdateInstance#device_update_account_id}.

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#iothub_id IothubDeviceUpdateInstance#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#name IothubDeviceUpdateInstance#name}.

---

##### `diagnosticEnabled`<sup>Optional</sup> <a name="diagnosticEnabled" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticEnabled"></a>

```java
public java.lang.Object getDiagnosticEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#diagnostic_enabled IothubDeviceUpdateInstance#diagnostic_enabled}.

---

##### `diagnosticStorageAccount`<sup>Optional</sup> <a name="diagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.diagnosticStorageAccount"></a>

```java
public IothubDeviceUpdateInstanceDiagnosticStorageAccount getDiagnosticStorageAccount();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

diagnostic_storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#diagnostic_storage_account IothubDeviceUpdateInstance#diagnostic_storage_account}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#tags IothubDeviceUpdateInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceConfig.property.timeouts"></a>

```java
public IothubDeviceUpdateInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#timeouts IothubDeviceUpdateInstance#timeouts}

---

### IothubDeviceUpdateInstanceDiagnosticStorageAccount <a name="IothubDeviceUpdateInstanceDiagnosticStorageAccount" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstanceDiagnosticStorageAccount;

IothubDeviceUpdateInstanceDiagnosticStorageAccount.builder()
    .connectionString(java.lang.String)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}. |

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#connection_string IothubDeviceUpdateInstance#connection_string}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#id IothubDeviceUpdateInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### IothubDeviceUpdateInstanceTimeouts <a name="IothubDeviceUpdateInstanceTimeouts" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstanceTimeouts;

IothubDeviceUpdateInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#create IothubDeviceUpdateInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#delete IothubDeviceUpdateInstance#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#read IothubDeviceUpdateInstance#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/iothub_device_update_instance#update IothubDeviceUpdateInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference <a name="IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference;

new IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccountOutputReference.property.internalValue"></a>

```java
public IothubDeviceUpdateInstanceDiagnosticStorageAccount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceDiagnosticStorageAccount">IothubDeviceUpdateInstanceDiagnosticStorageAccount</a>

---


### IothubDeviceUpdateInstanceTimeoutsOutputReference <a name="IothubDeviceUpdateInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.iothub_device_update_instance.IothubDeviceUpdateInstanceTimeoutsOutputReference;

new IothubDeviceUpdateInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.iothubDeviceUpdateInstance.IothubDeviceUpdateInstanceTimeouts">IothubDeviceUpdateInstanceTimeouts</a>

---



