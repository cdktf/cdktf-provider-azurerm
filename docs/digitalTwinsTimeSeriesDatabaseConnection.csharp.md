# `azurerm_digital_twins_time_series_database_connection`

Refer to the Terraform Registory for docs: [`azurerm_digital_twins_time_series_database_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection).

# `digitalTwinsTimeSeriesDatabaseConnection` Submodule <a name="`digitalTwinsTimeSeriesDatabaseConnection` Submodule" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsTimeSeriesDatabaseConnection <a name="DigitalTwinsTimeSeriesDatabaseConnection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection azurerm_digital_twins_time_series_database_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsTimeSeriesDatabaseConnection(Construct Scope, string Id, DigitalTwinsTimeSeriesDatabaseConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig">DigitalTwinsTimeSeriesDatabaseConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig">DigitalTwinsTimeSeriesDatabaseConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetEventhubConsumerGroupName">ResetEventhubConsumerGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetKustoTableName">ResetKustoTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DigitalTwinsTimeSeriesDatabaseConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

---

##### `ResetEventhubConsumerGroupName` <a name="ResetEventhubConsumerGroupName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetEventhubConsumerGroupName"></a>

```csharp
private void ResetEventhubConsumerGroupName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKustoTableName` <a name="ResetKustoTableName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetKustoTableName"></a>

```csharp
private void ResetKustoTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsTimeSeriesDatabaseConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsTimeSeriesDatabaseConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DigitalTwinsTimeSeriesDatabaseConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference">DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsIdInput">DigitalTwinsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupNameInput">EventhubConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUriInput">EventhubNamespaceEndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceIdInput">EventhubNamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterIdInput">KustoClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUriInput">KustoClusterUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseNameInput">KustoDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableNameInput">KustoTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUri">EventhubNamespaceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceId">EventhubNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterId">KustoClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUri">KustoClusterUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseName">KustoDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableName">KustoTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeouts"></a>

```csharp
public DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference">DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference</a>

---

##### `DigitalTwinsIdInput`<sup>Optional</sup> <a name="DigitalTwinsIdInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsIdInput"></a>

```csharp
public string DigitalTwinsIdInput { get; }
```

- *Type:* string

---

##### `EventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="EventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupNameInput"></a>

```csharp
public string EventhubConsumerGroupNameInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `EventhubNamespaceEndpointUriInput`<sup>Optional</sup> <a name="EventhubNamespaceEndpointUriInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUriInput"></a>

```csharp
public string EventhubNamespaceEndpointUriInput { get; }
```

- *Type:* string

---

##### `EventhubNamespaceIdInput`<sup>Optional</sup> <a name="EventhubNamespaceIdInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceIdInput"></a>

```csharp
public string EventhubNamespaceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KustoClusterIdInput`<sup>Optional</sup> <a name="KustoClusterIdInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterIdInput"></a>

```csharp
public string KustoClusterIdInput { get; }
```

- *Type:* string

---

##### `KustoClusterUriInput`<sup>Optional</sup> <a name="KustoClusterUriInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUriInput"></a>

```csharp
public string KustoClusterUriInput { get; }
```

- *Type:* string

---

##### `KustoDatabaseNameInput`<sup>Optional</sup> <a name="KustoDatabaseNameInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseNameInput"></a>

```csharp
public string KustoDatabaseNameInput { get; }
```

- *Type:* string

---

##### `KustoTableNameInput`<sup>Optional</sup> <a name="KustoTableNameInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableNameInput"></a>

```csharp
public string KustoTableNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; }
```

- *Type:* string

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupName"></a>

```csharp
public string EventhubConsumerGroupName { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `EventhubNamespaceEndpointUri`<sup>Required</sup> <a name="EventhubNamespaceEndpointUri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUri"></a>

```csharp
public string EventhubNamespaceEndpointUri { get; }
```

- *Type:* string

---

##### `EventhubNamespaceId`<sup>Required</sup> <a name="EventhubNamespaceId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceId"></a>

```csharp
public string EventhubNamespaceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KustoClusterId`<sup>Required</sup> <a name="KustoClusterId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterId"></a>

```csharp
public string KustoClusterId { get; }
```

- *Type:* string

---

##### `KustoClusterUri`<sup>Required</sup> <a name="KustoClusterUri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUri"></a>

```csharp
public string KustoClusterUri { get; }
```

- *Type:* string

---

##### `KustoDatabaseName`<sup>Required</sup> <a name="KustoDatabaseName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseName"></a>

```csharp
public string KustoDatabaseName { get; }
```

- *Type:* string

---

##### `KustoTableName`<sup>Required</sup> <a name="KustoTableName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableName"></a>

```csharp
public string KustoTableName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsTimeSeriesDatabaseConnectionConfig <a name="DigitalTwinsTimeSeriesDatabaseConnectionConfig" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsTimeSeriesDatabaseConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DigitalTwinsId,
    string EventhubName,
    string EventhubNamespaceEndpointUri,
    string EventhubNamespaceId,
    string KustoClusterId,
    string KustoClusterUri,
    string KustoDatabaseName,
    string Name,
    string EventhubConsumerGroupName = null,
    string Id = null,
    string KustoTableName = null,
    DigitalTwinsTimeSeriesDatabaseConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.digitalTwinsId">DigitalTwinsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceEndpointUri">EventhubNamespaceEndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceId">EventhubNamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterId">KustoClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterUri">KustoClusterUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoDatabaseName">KustoDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoTableName">KustoTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DigitalTwinsId`<sup>Required</sup> <a name="DigitalTwinsId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.digitalTwinsId"></a>

```csharp
public string DigitalTwinsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}.

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}.

---

##### `EventhubNamespaceEndpointUri`<sup>Required</sup> <a name="EventhubNamespaceEndpointUri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceEndpointUri"></a>

```csharp
public string EventhubNamespaceEndpointUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}.

---

##### `EventhubNamespaceId`<sup>Required</sup> <a name="EventhubNamespaceId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceId"></a>

```csharp
public string EventhubNamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}.

---

##### `KustoClusterId`<sup>Required</sup> <a name="KustoClusterId" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterId"></a>

```csharp
public string KustoClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}.

---

##### `KustoClusterUri`<sup>Required</sup> <a name="KustoClusterUri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterUri"></a>

```csharp
public string KustoClusterUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}.

---

##### `KustoDatabaseName`<sup>Required</sup> <a name="KustoDatabaseName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoDatabaseName"></a>

```csharp
public string KustoDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}.

---

##### `EventhubConsumerGroupName`<sup>Optional</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubConsumerGroupName"></a>

```csharp
public string EventhubConsumerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KustoTableName`<sup>Optional</sup> <a name="KustoTableName" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoTableName"></a>

```csharp
public string KustoTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.timeouts"></a>

```csharp
public DigitalTwinsTimeSeriesDatabaseConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#timeouts DigitalTwinsTimeSeriesDatabaseConnection#timeouts}

---

### DigitalTwinsTimeSeriesDatabaseConnectionTimeouts <a name="DigitalTwinsTimeSeriesDatabaseConnectionTimeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsTimeSeriesDatabaseConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference <a name="DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



