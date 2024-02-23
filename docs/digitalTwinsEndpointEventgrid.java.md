# `digitalTwinsEndpointEventgrid` Submodule <a name="`digitalTwinsEndpointEventgrid` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointEventgrid <a name="DigitalTwinsEndpointEventgrid" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid azurerm_digital_twins_endpoint_eventgrid}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgrid;

DigitalTwinsEndpointEventgrid.Builder.create(Construct scope, java.lang.String id)
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
    .eventgridTopicEndpoint(java.lang.String)
    .eventgridTopicPrimaryAccessKey(java.lang.String)
    .eventgridTopicSecondaryAccessKey(java.lang.String)
    .name(java.lang.String)
//  .deadLetterStorageSecret(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DigitalTwinsEndpointEventgridTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.eventgridTopicEndpoint">eventgridTopicEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.eventgridTopicPrimaryAccessKey">eventgridTopicPrimaryAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.eventgridTopicSecondaryAccessKey">eventgridTopicSecondaryAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.digitalTwinsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}.

---

##### `eventgridTopicEndpoint`<sup>Required</sup> <a name="eventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.eventgridTopicEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}.

---

##### `eventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="eventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.eventgridTopicPrimaryAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}.

---

##### `eventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="eventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.eventgridTopicSecondaryAccessKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.deadLetterStorageSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#timeouts DigitalTwinsEndpointEventgrid#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret">resetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts"></a>

```java
public void putTimeouts(DigitalTwinsEndpointEventgridTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `resetDeadLetterStorageSecret` <a name="resetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetDeadLetterStorageSecret"></a>

```java
public void resetDeadLetterStorageSecret()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgrid;

DigitalTwinsEndpointEventgrid.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgrid;

DigitalTwinsEndpointEventgrid.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgrid;

DigitalTwinsEndpointEventgrid.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgrid;

DigitalTwinsEndpointEventgrid.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DigitalTwinsEndpointEventgrid.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DigitalTwinsEndpointEventgrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DigitalTwinsEndpointEventgrid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DigitalTwinsEndpointEventgrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsEndpointEventgrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput">deadLetterStorageSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput">digitalTwinsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput">eventgridTopicEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput">eventgridTopicPrimaryAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput">eventgridTopicSecondaryAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint">eventgridTopicEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey">eventgridTopicPrimaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey">eventgridTopicSecondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeouts"></a>

```java
public DigitalTwinsEndpointEventgridTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference">DigitalTwinsEndpointEventgridTimeoutsOutputReference</a>

---

##### `deadLetterStorageSecretInput`<sup>Optional</sup> <a name="deadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecretInput"></a>

```java
public java.lang.String getDeadLetterStorageSecretInput();
```

- *Type:* java.lang.String

---

##### `digitalTwinsIdInput`<sup>Optional</sup> <a name="digitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsIdInput"></a>

```java
public java.lang.String getDigitalTwinsIdInput();
```

- *Type:* java.lang.String

---

##### `eventgridTopicEndpointInput`<sup>Optional</sup> <a name="eventgridTopicEndpointInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpointInput"></a>

```java
public java.lang.String getEventgridTopicEndpointInput();
```

- *Type:* java.lang.String

---

##### `eventgridTopicPrimaryAccessKeyInput`<sup>Optional</sup> <a name="eventgridTopicPrimaryAccessKeyInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKeyInput"></a>

```java
public java.lang.String getEventgridTopicPrimaryAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `eventgridTopicSecondaryAccessKeyInput`<sup>Optional</sup> <a name="eventgridTopicSecondaryAccessKeyInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKeyInput"></a>

```java
public java.lang.String getEventgridTopicSecondaryAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---

##### `deadLetterStorageSecret`<sup>Required</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.deadLetterStorageSecret"></a>

```java
public java.lang.String getDeadLetterStorageSecret();
```

- *Type:* java.lang.String

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

---

##### `eventgridTopicEndpoint`<sup>Required</sup> <a name="eventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicEndpoint"></a>

```java
public java.lang.String getEventgridTopicEndpoint();
```

- *Type:* java.lang.String

---

##### `eventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="eventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicPrimaryAccessKey"></a>

```java
public java.lang.String getEventgridTopicPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `eventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="eventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.eventgridTopicSecondaryAccessKey"></a>

```java
public java.lang.String getEventgridTopicSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgrid.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointEventgridConfig <a name="DigitalTwinsEndpointEventgridConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgridConfig;

DigitalTwinsEndpointEventgridConfig.builder()
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
    .eventgridTopicEndpoint(java.lang.String)
    .eventgridTopicPrimaryAccessKey(java.lang.String)
    .eventgridTopicSecondaryAccessKey(java.lang.String)
    .name(java.lang.String)
//  .deadLetterStorageSecret(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DigitalTwinsEndpointEventgridTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint">eventgridTopicEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey">eventgridTopicPrimaryAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey">eventgridTopicSecondaryAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#digital_twins_id DigitalTwinsEndpointEventgrid#digital_twins_id}.

---

##### `eventgridTopicEndpoint`<sup>Required</sup> <a name="eventgridTopicEndpoint" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicEndpoint"></a>

```java
public java.lang.String getEventgridTopicEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_endpoint DigitalTwinsEndpointEventgrid#eventgrid_topic_endpoint}.

---

##### `eventgridTopicPrimaryAccessKey`<sup>Required</sup> <a name="eventgridTopicPrimaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicPrimaryAccessKey"></a>

```java
public java.lang.String getEventgridTopicPrimaryAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_primary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_primary_access_key}.

---

##### `eventgridTopicSecondaryAccessKey`<sup>Required</sup> <a name="eventgridTopicSecondaryAccessKey" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.eventgridTopicSecondaryAccessKey"></a>

```java
public java.lang.String getEventgridTopicSecondaryAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#eventgrid_topic_secondary_access_key DigitalTwinsEndpointEventgrid#eventgrid_topic_secondary_access_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#name DigitalTwinsEndpointEventgrid#name}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.deadLetterStorageSecret"></a>

```java
public java.lang.String getDeadLetterStorageSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#dead_letter_storage_secret DigitalTwinsEndpointEventgrid#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#id DigitalTwinsEndpointEventgrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridConfig.property.timeouts"></a>

```java
public DigitalTwinsEndpointEventgridTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#timeouts DigitalTwinsEndpointEventgrid#timeouts}

---

### DigitalTwinsEndpointEventgridTimeouts <a name="DigitalTwinsEndpointEventgridTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgridTimeouts;

DigitalTwinsEndpointEventgridTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#create DigitalTwinsEndpointEventgrid#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#delete DigitalTwinsEndpointEventgrid#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#read DigitalTwinsEndpointEventgrid#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/digital_twins_endpoint_eventgrid#update DigitalTwinsEndpointEventgrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointEventgridTimeoutsOutputReference <a name="DigitalTwinsEndpointEventgridTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_eventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference;

new DigitalTwinsEndpointEventgridTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointEventgrid.DigitalTwinsEndpointEventgridTimeouts">DigitalTwinsEndpointEventgridTimeouts</a>

---



