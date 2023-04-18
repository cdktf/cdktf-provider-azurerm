# `azurerm_iothub_endpoint_servicebus_topic`

Refer to the Terraform Registory for docs: [`azurerm_iothub_endpoint_servicebus_topic`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic).

# `iothubEndpointServicebusTopic` Submodule <a name="`iothubEndpointServicebusTopic` Submodule" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointServicebusTopic <a name="IothubEndpointServicebusTopic" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic azurerm_iothub_endpoint_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubEndpointServicebusTopic(Construct Scope, string Id, IothubEndpointServicebusTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig">IothubEndpointServicebusTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig">IothubEndpointServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEndpointUri">ResetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEntityPath">ResetEntityPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(IothubEndpointServicebusTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetEndpointUri` <a name="ResetEndpointUri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEndpointUri"></a>

```csharp
private void ResetEndpointUri()
```

##### `ResetEntityPath` <a name="ResetEntityPath" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEntityPath"></a>

```csharp
private void ResetEntityPath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetIdentityId"></a>

```csharp
private void ResetIdentityId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubEndpointServicebusTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubEndpointServicebusTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IothubEndpointServicebusTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference">IothubEndpointServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUriInput">EndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPathInput">EntityPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubIdInput">IothubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUri">EndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPath">EntityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubId">IothubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeouts"></a>

```csharp
public IothubEndpointServicebusTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference">IothubEndpointServicebusTopicTimeoutsOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `EndpointUriInput`<sup>Optional</sup> <a name="EndpointUriInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUriInput"></a>

```csharp
public string EndpointUriInput { get; }
```

- *Type:* string

---

##### `EntityPathInput`<sup>Optional</sup> <a name="EntityPathInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPathInput"></a>

```csharp
public string EntityPathInput { get; }
```

- *Type:* string

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IothubIdInput`<sup>Optional</sup> <a name="IothubIdInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubIdInput"></a>

```csharp
public string IothubIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `EndpointUri`<sup>Required</sup> <a name="EndpointUri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUri"></a>

```csharp
public string EndpointUri { get; }
```

- *Type:* string

---

##### `EntityPath`<sup>Required</sup> <a name="EntityPath" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPath"></a>

```csharp
public string EntityPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubId"></a>

```csharp
public string IothubId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointServicebusTopicConfig <a name="IothubEndpointServicebusTopicConfig" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubEndpointServicebusTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IothubId,
    string Name,
    string ResourceGroupName,
    string AuthenticationType = null,
    string ConnectionString = null,
    string EndpointUri = null,
    string EntityPath = null,
    string Id = null,
    string IdentityId = null,
    IothubEndpointServicebusTopicTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.iothubId">IothubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.endpointUri">EndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.entityPath">EntityPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IothubId`<sup>Required</sup> <a name="IothubId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.iothubId"></a>

```csharp
public string IothubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}.

---

##### `EndpointUri`<sup>Optional</sup> <a name="EndpointUri" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.endpointUri"></a>

```csharp
public string EndpointUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}.

---

##### `EntityPath`<sup>Optional</sup> <a name="EntityPath" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.entityPath"></a>

```csharp
public string EntityPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.timeouts"></a>

```csharp
public IothubEndpointServicebusTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#timeouts IothubEndpointServicebusTopic#timeouts}

---

### IothubEndpointServicebusTopicTimeouts <a name="IothubEndpointServicebusTopicTimeouts" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubEndpointServicebusTopicTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointServicebusTopicTimeoutsOutputReference <a name="IothubEndpointServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IothubEndpointServicebusTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



