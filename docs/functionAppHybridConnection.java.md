# `azurerm_function_app_hybrid_connection`

Refer to the Terraform Registory for docs: [`azurerm_function_app_hybrid_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection).

# `functionAppHybridConnection` Submodule <a name="`functionAppHybridConnection` Submodule" id="@cdktf/provider-azurerm.functionAppHybridConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppHybridConnection <a name="FunctionAppHybridConnection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection azurerm_function_app_hybrid_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnection;

FunctionAppHybridConnection.Builder.create(Construct scope, java.lang.String id)
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
    .functionAppId(java.lang.String)
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .relayId(java.lang.String)
//  .id(java.lang.String)
//  .sendKeyName(java.lang.String)
//  .timeouts(FunctionAppHybridConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.functionAppId">functionAppId</a></code> | <code>java.lang.String</code> | The ID of the Function App for this Hybrid Connection. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port to use for the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.relayId">relayId</a></code> | <code>java.lang.String</code> | The ID of the Relay Hybrid Connection to use. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.sendKeyName">sendKeyName</a></code> | <code>java.lang.String</code> | The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.functionAppId"></a>

- *Type:* java.lang.String

The ID of the Function App for this Hybrid Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#function_app_id FunctionAppHybridConnection#function_app_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

The hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#hostname FunctionAppHybridConnection#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#port FunctionAppHybridConnection#port}

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.relayId"></a>

- *Type:* java.lang.String

The ID of the Relay Hybrid Connection to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#relay_id FunctionAppHybridConnection#relay_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendKeyName`<sup>Optional</sup> <a name="sendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.sendKeyName"></a>

- *Type:* java.lang.String

The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#send_key_name FunctionAppHybridConnection#send_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#timeouts FunctionAppHybridConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetSendKeyName">resetSendKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts"></a>

```java
public void putTimeouts(FunctionAppHybridConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetId"></a>

```java
public void resetId()
```

##### `resetSendKeyName` <a name="resetSendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetSendKeyName"></a>

```java
public void resetSendKeyName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnection;

FunctionAppHybridConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnection;

FunctionAppHybridConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnection;

FunctionAppHybridConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayName">relayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyValue">sendKeyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusNamespace">serviceBusNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusSuffix">serviceBusSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference">FunctionAppHybridConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppIdInput">functionAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayIdInput">relayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyNameInput">sendKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppId">functionAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayId">relayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyName">sendKeyName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `relayName`<sup>Required</sup> <a name="relayName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayName"></a>

```java
public java.lang.String getRelayName();
```

- *Type:* java.lang.String

---

##### `sendKeyValue`<sup>Required</sup> <a name="sendKeyValue" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyValue"></a>

```java
public java.lang.String getSendKeyValue();
```

- *Type:* java.lang.String

---

##### `serviceBusNamespace`<sup>Required</sup> <a name="serviceBusNamespace" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusNamespace"></a>

```java
public java.lang.String getServiceBusNamespace();
```

- *Type:* java.lang.String

---

##### `serviceBusSuffix`<sup>Required</sup> <a name="serviceBusSuffix" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.serviceBusSuffix"></a>

```java
public java.lang.String getServiceBusSuffix();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeouts"></a>

```java
public FunctionAppHybridConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference">FunctionAppHybridConnectionTimeoutsOutputReference</a>

---

##### `functionAppIdInput`<sup>Optional</sup> <a name="functionAppIdInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppIdInput"></a>

```java
public java.lang.String getFunctionAppIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `relayIdInput`<sup>Optional</sup> <a name="relayIdInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayIdInput"></a>

```java
public java.lang.String getRelayIdInput();
```

- *Type:* java.lang.String

---

##### `sendKeyNameInput`<sup>Optional</sup> <a name="sendKeyNameInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyNameInput"></a>

```java
public java.lang.String getSendKeyNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.functionAppId"></a>

```java
public java.lang.String getFunctionAppId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.relayId"></a>

```java
public java.lang.String getRelayId();
```

- *Type:* java.lang.String

---

##### `sendKeyName`<sup>Required</sup> <a name="sendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.sendKeyName"></a>

```java
public java.lang.String getSendKeyName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppHybridConnectionConfig <a name="FunctionAppHybridConnectionConfig" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnectionConfig;

FunctionAppHybridConnectionConfig.builder()
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
    .functionAppId(java.lang.String)
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .relayId(java.lang.String)
//  .id(java.lang.String)
//  .sendKeyName(java.lang.String)
//  .timeouts(FunctionAppHybridConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.functionAppId">functionAppId</a></code> | <code>java.lang.String</code> | The ID of the Function App for this Hybrid Connection. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | The hostname of the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port to use for the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.relayId">relayId</a></code> | <code>java.lang.String</code> | The ID of the Relay Hybrid Connection to use. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.sendKeyName">sendKeyName</a></code> | <code>java.lang.String</code> | The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionAppId`<sup>Required</sup> <a name="functionAppId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.functionAppId"></a>

```java
public java.lang.String getFunctionAppId();
```

- *Type:* java.lang.String

The ID of the Function App for this Hybrid Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#function_app_id FunctionAppHybridConnection#function_app_id}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

The hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#hostname FunctionAppHybridConnection#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#port FunctionAppHybridConnection#port}

---

##### `relayId`<sup>Required</sup> <a name="relayId" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.relayId"></a>

```java
public java.lang.String getRelayId();
```

- *Type:* java.lang.String

The ID of the Relay Hybrid Connection to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#relay_id FunctionAppHybridConnection#relay_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#id FunctionAppHybridConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sendKeyName`<sup>Optional</sup> <a name="sendKeyName" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.sendKeyName"></a>

```java
public java.lang.String getSendKeyName();
```

- *Type:* java.lang.String

The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#send_key_name FunctionAppHybridConnection#send_key_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionConfig.property.timeouts"></a>

```java
public FunctionAppHybridConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#timeouts FunctionAppHybridConnection#timeouts}

---

### FunctionAppHybridConnectionTimeouts <a name="FunctionAppHybridConnectionTimeouts" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnectionTimeouts;

FunctionAppHybridConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#create FunctionAppHybridConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#delete FunctionAppHybridConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#read FunctionAppHybridConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/function_app_hybrid_connection#update FunctionAppHybridConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppHybridConnectionTimeoutsOutputReference <a name="FunctionAppHybridConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.function_app_hybrid_connection.FunctionAppHybridConnectionTimeoutsOutputReference;

new FunctionAppHybridConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.functionAppHybridConnection.FunctionAppHybridConnectionTimeouts">FunctionAppHybridConnectionTimeouts</a>

---



