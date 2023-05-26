# `azurerm_digital_twins_endpoint_servicebus`

Refer to the Terraform Registory for docs: [`azurerm_digital_twins_endpoint_servicebus`](https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus).

# `digitalTwinsEndpointServicebus` Submodule <a name="`digitalTwinsEndpointServicebus` Submodule" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsEndpointServicebus <a name="DigitalTwinsEndpointServicebus" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus azurerm_digital_twins_endpoint_servicebus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebus;

DigitalTwinsEndpointServicebus.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .servicebusPrimaryConnectionString(java.lang.String)
    .servicebusSecondaryConnectionString(java.lang.String)
//  .deadLetterStorageSecret(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DigitalTwinsEndpointServicebusTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.servicebusPrimaryConnectionString">servicebusPrimaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.servicebusSecondaryConnectionString">servicebusSecondaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.digitalTwinsId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}.

---

##### `servicebusPrimaryConnectionString`<sup>Required</sup> <a name="servicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.servicebusPrimaryConnectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}.

---

##### `servicebusSecondaryConnectionString`<sup>Required</sup> <a name="servicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.servicebusSecondaryConnectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.deadLetterStorageSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#timeouts DigitalTwinsEndpointServicebus#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret">resetDeadLetterStorageSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts"></a>

```java
public void putTimeouts(DigitalTwinsEndpointServicebusTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

---

##### `resetDeadLetterStorageSecret` <a name="resetDeadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetDeadLetterStorageSecret"></a>

```java
public void resetDeadLetterStorageSecret()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebus;

DigitalTwinsEndpointServicebus.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebus;

DigitalTwinsEndpointServicebus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebus;

DigitalTwinsEndpointServicebus.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput">deadLetterStorageSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput">digitalTwinsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput">servicebusPrimaryConnectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput">servicebusSecondaryConnectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString">servicebusPrimaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString">servicebusSecondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeouts"></a>

```java
public DigitalTwinsEndpointServicebusTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference">DigitalTwinsEndpointServicebusTimeoutsOutputReference</a>

---

##### `deadLetterStorageSecretInput`<sup>Optional</sup> <a name="deadLetterStorageSecretInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecretInput"></a>

```java
public java.lang.String getDeadLetterStorageSecretInput();
```

- *Type:* java.lang.String

---

##### `digitalTwinsIdInput`<sup>Optional</sup> <a name="digitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsIdInput"></a>

```java
public java.lang.String getDigitalTwinsIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `servicebusPrimaryConnectionStringInput`<sup>Optional</sup> <a name="servicebusPrimaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionStringInput"></a>

```java
public java.lang.String getServicebusPrimaryConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `servicebusSecondaryConnectionStringInput`<sup>Optional</sup> <a name="servicebusSecondaryConnectionStringInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionStringInput"></a>

```java
public java.lang.String getServicebusSecondaryConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `deadLetterStorageSecret`<sup>Required</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.deadLetterStorageSecret"></a>

```java
public java.lang.String getDeadLetterStorageSecret();
```

- *Type:* java.lang.String

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servicebusPrimaryConnectionString`<sup>Required</sup> <a name="servicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusPrimaryConnectionString"></a>

```java
public java.lang.String getServicebusPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `servicebusSecondaryConnectionString`<sup>Required</sup> <a name="servicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.servicebusSecondaryConnectionString"></a>

```java
public java.lang.String getServicebusSecondaryConnectionString();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsEndpointServicebusConfig <a name="DigitalTwinsEndpointServicebusConfig" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebusConfig;

DigitalTwinsEndpointServicebusConfig.builder()
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
    .name(java.lang.String)
    .servicebusPrimaryConnectionString(java.lang.String)
    .servicebusSecondaryConnectionString(java.lang.String)
//  .deadLetterStorageSecret(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DigitalTwinsEndpointServicebusTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId">digitalTwinsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString">servicebusPrimaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString">servicebusSecondaryConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret">deadLetterStorageSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `digitalTwinsId`<sup>Required</sup> <a name="digitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.digitalTwinsId"></a>

```java
public java.lang.String getDigitalTwinsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#digital_twins_id DigitalTwinsEndpointServicebus#digital_twins_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#name DigitalTwinsEndpointServicebus#name}.

---

##### `servicebusPrimaryConnectionString`<sup>Required</sup> <a name="servicebusPrimaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusPrimaryConnectionString"></a>

```java
public java.lang.String getServicebusPrimaryConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_primary_connection_string DigitalTwinsEndpointServicebus#servicebus_primary_connection_string}.

---

##### `servicebusSecondaryConnectionString`<sup>Required</sup> <a name="servicebusSecondaryConnectionString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.servicebusSecondaryConnectionString"></a>

```java
public java.lang.String getServicebusSecondaryConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#servicebus_secondary_connection_string DigitalTwinsEndpointServicebus#servicebus_secondary_connection_string}.

---

##### `deadLetterStorageSecret`<sup>Optional</sup> <a name="deadLetterStorageSecret" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.deadLetterStorageSecret"></a>

```java
public java.lang.String getDeadLetterStorageSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#dead_letter_storage_secret DigitalTwinsEndpointServicebus#dead_letter_storage_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#id DigitalTwinsEndpointServicebus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusConfig.property.timeouts"></a>

```java
public DigitalTwinsEndpointServicebusTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#timeouts DigitalTwinsEndpointServicebus#timeouts}

---

### DigitalTwinsEndpointServicebusTimeouts <a name="DigitalTwinsEndpointServicebusTimeouts" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebusTimeouts;

DigitalTwinsEndpointServicebusTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#create DigitalTwinsEndpointServicebus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#delete DigitalTwinsEndpointServicebus#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#read DigitalTwinsEndpointServicebus#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.58.0/docs/resources/digital_twins_endpoint_servicebus#update DigitalTwinsEndpointServicebus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsEndpointServicebusTimeoutsOutputReference <a name="DigitalTwinsEndpointServicebusTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.digital_twins_endpoint_servicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference;

new DigitalTwinsEndpointServicebusTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsEndpointServicebus.DigitalTwinsEndpointServicebusTimeouts">DigitalTwinsEndpointServicebusTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



