# `azurerm_iot_time_series_insights_event_source_eventhub`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_event_source_eventhub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub).

# `iotTimeSeriesInsightsEventSourceEventhub` Submodule <a name="`iotTimeSeriesInsightsEventSourceEventhub` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsEventSourceEventhub <a name="IotTimeSeriesInsightsEventSourceEventhub" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub azurerm_iot_time_series_insights_event_source_eventhub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceEventhub(Construct Scope, string Id, IotTimeSeriesInsightsEventSourceEventhubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig">IotTimeSeriesInsightsEventSourceEventhubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig">IotTimeSeriesInsightsEventSourceEventhubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimestampPropertyName">ResetTimestampPropertyName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.putTimeouts"></a>

```csharp
private void PutTimeouts(IotTimeSeriesInsightsEventSourceEventhubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimestampPropertyName` <a name="ResetTimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.resetTimestampPropertyName"></a>

```csharp
private void ResetTimestampPropertyName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceEventhub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceEventhub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

IotTimeSeriesInsightsEventSourceEventhub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupNameInput">ConsumerGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceIdInput">EventSourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyInput">SharedAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyNameInput">SharedAccessKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyNameInput">TimestampPropertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupName">ConsumerGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceId">EventSourceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKey">SharedAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyName">SharedAccessKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyName">TimestampPropertyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference">IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference</a>

---

##### `ConsumerGroupNameInput`<sup>Optional</sup> <a name="ConsumerGroupNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupNameInput"></a>

```csharp
public string ConsumerGroupNameInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `EventSourceResourceIdInput`<sup>Optional</sup> <a name="EventSourceResourceIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceIdInput"></a>

```csharp
public string EventSourceResourceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `SharedAccessKeyInput`<sup>Optional</sup> <a name="SharedAccessKeyInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyInput"></a>

```csharp
public string SharedAccessKeyInput { get; }
```

- *Type:* string

---

##### `SharedAccessKeyNameInput`<sup>Optional</sup> <a name="SharedAccessKeyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyNameInput"></a>

```csharp
public string SharedAccessKeyNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimestampPropertyNameInput`<sup>Optional</sup> <a name="TimestampPropertyNameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyNameInput"></a>

```csharp
public string TimestampPropertyNameInput { get; }
```

- *Type:* string

---

##### `ConsumerGroupName`<sup>Required</sup> <a name="ConsumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.consumerGroupName"></a>

```csharp
public string ConsumerGroupName { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `EventSourceResourceId`<sup>Required</sup> <a name="EventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.eventSourceResourceId"></a>

```csharp
public string EventSourceResourceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `SharedAccessKey`<sup>Required</sup> <a name="SharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKey"></a>

```csharp
public string SharedAccessKey { get; }
```

- *Type:* string

---

##### `SharedAccessKeyName`<sup>Required</sup> <a name="SharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.sharedAccessKeyName"></a>

```csharp
public string SharedAccessKeyName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimestampPropertyName`<sup>Required</sup> <a name="TimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.timestampPropertyName"></a>

```csharp
public string TimestampPropertyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsEventSourceEventhubConfig <a name="IotTimeSeriesInsightsEventSourceEventhubConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceEventhubConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConsumerGroupName,
    string EnvironmentId,
    string EventhubName,
    string EventSourceResourceId,
    string Location,
    string Name,
    string NamespaceName,
    string SharedAccessKey,
    string SharedAccessKeyName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IotTimeSeriesInsightsEventSourceEventhubTimeouts Timeouts = null,
    string TimestampPropertyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.consumerGroupName">ConsumerGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#consumer_group_name IotTimeSeriesInsightsEventSourceEventhub#consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#environment_id IotTimeSeriesInsightsEventSourceEventhub#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#eventhub_name IotTimeSeriesInsightsEventSourceEventhub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventSourceResourceId">EventSourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#event_source_resource_id IotTimeSeriesInsightsEventSourceEventhub#event_source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#location IotTimeSeriesInsightsEventSourceEventhub#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#name IotTimeSeriesInsightsEventSourceEventhub#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#namespace_name IotTimeSeriesInsightsEventSourceEventhub#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKey">SharedAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key IotTimeSeriesInsightsEventSourceEventhub#shared_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKeyName">SharedAccessKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key_name IotTimeSeriesInsightsEventSourceEventhub#shared_access_key_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#id IotTimeSeriesInsightsEventSourceEventhub#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#tags IotTimeSeriesInsightsEventSourceEventhub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timestampPropertyName">TimestampPropertyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#timestamp_property_name IotTimeSeriesInsightsEventSourceEventhub#timestamp_property_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConsumerGroupName`<sup>Required</sup> <a name="ConsumerGroupName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.consumerGroupName"></a>

```csharp
public string ConsumerGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#consumer_group_name IotTimeSeriesInsightsEventSourceEventhub#consumer_group_name}.

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#environment_id IotTimeSeriesInsightsEventSourceEventhub#environment_id}.

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#eventhub_name IotTimeSeriesInsightsEventSourceEventhub#eventhub_name}.

---

##### `EventSourceResourceId`<sup>Required</sup> <a name="EventSourceResourceId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.eventSourceResourceId"></a>

```csharp
public string EventSourceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#event_source_resource_id IotTimeSeriesInsightsEventSourceEventhub#event_source_resource_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#location IotTimeSeriesInsightsEventSourceEventhub#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#name IotTimeSeriesInsightsEventSourceEventhub#name}.

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#namespace_name IotTimeSeriesInsightsEventSourceEventhub#namespace_name}.

---

##### `SharedAccessKey`<sup>Required</sup> <a name="SharedAccessKey" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKey"></a>

```csharp
public string SharedAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key IotTimeSeriesInsightsEventSourceEventhub#shared_access_key}.

---

##### `SharedAccessKeyName`<sup>Required</sup> <a name="SharedAccessKeyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.sharedAccessKeyName"></a>

```csharp
public string SharedAccessKeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#shared_access_key_name IotTimeSeriesInsightsEventSourceEventhub#shared_access_key_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#id IotTimeSeriesInsightsEventSourceEventhub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#tags IotTimeSeriesInsightsEventSourceEventhub#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timeouts"></a>

```csharp
public IotTimeSeriesInsightsEventSourceEventhubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts">IotTimeSeriesInsightsEventSourceEventhubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#timeouts IotTimeSeriesInsightsEventSourceEventhub#timeouts}

---

##### `TimestampPropertyName`<sup>Optional</sup> <a name="TimestampPropertyName" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubConfig.property.timestampPropertyName"></a>

```csharp
public string TimestampPropertyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#timestamp_property_name IotTimeSeriesInsightsEventSourceEventhub#timestamp_property_name}.

---

### IotTimeSeriesInsightsEventSourceEventhubTimeouts <a name="IotTimeSeriesInsightsEventSourceEventhubTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceEventhubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#create IotTimeSeriesInsightsEventSourceEventhub#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#delete IotTimeSeriesInsightsEventSourceEventhub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#read IotTimeSeriesInsightsEventSourceEventhub#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#update IotTimeSeriesInsightsEventSourceEventhub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#create IotTimeSeriesInsightsEventSourceEventhub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#delete IotTimeSeriesInsightsEventSourceEventhub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#read IotTimeSeriesInsightsEventSourceEventhub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/iot_time_series_insights_event_source_eventhub#update IotTimeSeriesInsightsEventSourceEventhub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference <a name="IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsEventSourceEventhub.IotTimeSeriesInsightsEventSourceEventhubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



