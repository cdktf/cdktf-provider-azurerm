# `digitalTwinsEndpointEventhub` Submodule <a name="`digitalTwinsEndpointEventhub` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointEventhub <a name="DigitalTwinsEndpointEventhub" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub azurerm_digital_twins_endpoint_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhub;

DigitalTwinsEndpointEventhub.Builder.create(Construct scope, java.lang.String id)
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
    .digitalTwinsId(java.lang.String)
    .eventhubPrimaryConnectionString(java.lang.String)
    .eventhubSecondaryConnectionString(java.lang.String)
    .name(java.lang.String)
//  .deadLetterStorageSecret(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DigitalTwinsEndpointEventhubTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.eventhubPrimaryConnectionString">eventhubPrimaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.eventhubSecondaryConnectionString">eventhubSecondaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.digitalTwinsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}.

---

##### `eventhubPrimaryConnectionString`<sup>Required</sup> <a name="eventhubPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.eventhubPrimaryConnectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}.

---

##### `eventhubSecondaryConnectionString`<sup>Required</sup> <a name="eventhubSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.eventhubSecondaryConnectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.deadLetterStorageSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#timeouts DigitalTwinsEndpointEventhub#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetDeadLetterStorageSecret">resetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.putTimeouts"></a>

```java
public void putTimeouts(DigitalTwinsEndpointEventhubTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

---

##### `resetDeadLetterStorageSecret` <a name="resetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetDeadLetterStorageSecret"></a>

```java
public void resetDeadLetterStorageSecret()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointEventhub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhub;

DigitalTwinsEndpointEventhub.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhub;

DigitalTwinsEndpointEventhub.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhub;

DigitalTwinsEndpointEventhub.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhub;

DigitalTwinsEndpointEventhub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DigitalTwinsEndpointEventhub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DigitalTwinsEndpointEventhub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DigitalTwinsEndpointEventhub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DigitalTwinsEndpointEventhub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointEventhub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference">DigitalTwinsEndpointEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecretInput">deadLetterStorageSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsIdInput">digitalTwinsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionStringInput">eventhubPrimaryConnectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionStringInput">eventhubSecondaryConnectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionString">eventhubPrimaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionString">eventhubSecondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeouts"></a>

```java
public DigitalTwinsEndpointEventhubTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference">DigitalTwinsEndpointEventhubTimeoutsOutputReference</a>

---

##### `deadLetterStorageSecretInput`<sup>Optional</sup> <a name="deadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecretInput"></a>

```java
public java.lang.String getDeadLetterStorageSecretInput();
```

- *Type:* java.lang.String

---

##### `digitalTwinsIdInput`<sup>Optional</sup> <a name="digitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsIdInput"></a>

```java
public java.lang.String getDigitalTwinsIdInput();
```

- *Type:* java.lang.String

---

##### `eventhubPrimaryConnectionStringInput`<sup>Optional</sup> <a name="eventhubPrimaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionStringInput"></a>

```java
public java.lang.String getEventhubPrimaryConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `eventhubSecondaryConnectionStringInput`<sup>Optional</sup> <a name="eventhubSecondaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionStringInput"></a>

```java
public java.lang.String getEventhubSecondaryConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

---

##### `deadLetterStorageSecret`<sup>Required</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.deadLetterStorageSecret"></a>

```java
public java.lang.String getDeadLetterStorageSecret();
```

- *Type:* java.lang.String

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

---

##### `eventhubPrimaryConnectionString`<sup>Required</sup> <a name="eventhubPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubPrimaryConnectionString"></a>

```java
public java.lang.String getEventhubPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `eventhubSecondaryConnectionString`<sup>Required</sup> <a name="eventhubSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.eventhubSecondaryConnectionString"></a>

```java
public java.lang.String getEventhubSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhub.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointEventhubConfig <a name="DigitalTwinsEndpointEventhubConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhubConfig;

DigitalTwinsEndpointEventhubConfig.builder()
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
    .digitalTwinsId(java.lang.String)
    .eventhubPrimaryConnectionString(java.lang.String)
    .eventhubSecondaryConnectionString(java.lang.String)
    .name(java.lang.String)
//  .deadLetterStorageSecret(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DigitalTwinsEndpointEventhubTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubPrimaryConnectionString">eventhubPrimaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubSecondaryConnectionString">eventhubSecondaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#digital_twins_id DigitalTwinsEndpointEventhub#digital_twins_id}.

---

##### `eventhubPrimaryConnectionString`<sup>Required</sup> <a name="eventhubPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubPrimaryConnectionString"></a>

```java
public java.lang.String getEventhubPrimaryConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_primary_connection_string DigitalTwinsEndpointEventhub#eventhub_primary_connection_string}.

---

##### `eventhubSecondaryConnectionString`<sup>Required</sup> <a name="eventhubSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.eventhubSecondaryConnectionString"></a>

```java
public java.lang.String getEventhubSecondaryConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#eventhub_secondary_connection_string DigitalTwinsEndpointEventhub#eventhub_secondary_connection_string}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#name DigitalTwinsEndpointEventhub#name}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.deadLetterStorageSecret"></a>

```java
public java.lang.String getDeadLetterStorageSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#dead_letter_storage_secret DigitalTwinsEndpointEventhub#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#id DigitalTwinsEndpointEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubConfig.property.timeouts"></a>

```java
public DigitalTwinsEndpointEventhubTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#timeouts DigitalTwinsEndpointEventhub#timeouts}

---

### DigitalTwinsEndpointEventhubTimeouts <a name="DigitalTwinsEndpointEventhubTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhubTimeouts;

DigitalTwinsEndpointEventhubTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#create DigitalTwinsEndpointEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#delete DigitalTwinsEndpointEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#read DigitalTwinsEndpointEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#update DigitalTwinsEndpointEventhub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#create DigitalTwinsEndpointEventhub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#delete DigitalTwinsEndpointEventhub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#read DigitalTwinsEndpointEventhub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/digital_twins_endpoint_eventhub#update DigitalTwinsEndpointEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointEventhubTimeoutsOutputReference <a name="DigitalTwinsEndpointEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference;

new DigitalTwinsEndpointEventhubTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventhub.DigitalTwinsEndpointEventhubTimeouts">DigitalTwinsEndpointEventhubTimeouts</a>

---



