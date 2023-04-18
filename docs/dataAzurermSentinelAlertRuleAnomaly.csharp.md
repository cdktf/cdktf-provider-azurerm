# `data_azurerm_sentinel_alert_rule_anomaly`

Refer to the Terraform Registory for docs: [`data_azurerm_sentinel_alert_rule_anomaly`](https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly).

# `dataAzurermSentinelAlertRuleAnomaly` Submodule <a name="`dataAzurermSentinelAlertRuleAnomaly` Submodule" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSentinelAlertRuleAnomaly <a name="DataAzurermSentinelAlertRuleAnomaly" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly azurerm_sentinel_alert_rule_anomaly}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomaly(Construct Scope, string Id, DataAzurermSentinelAlertRuleAnomalyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig">DataAzurermSentinelAlertRuleAnomalyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig">DataAzurermSentinelAlertRuleAnomalyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermSentinelAlertRuleAnomalyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSentinelAlertRuleAnomaly.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSentinelAlertRuleAnomaly.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSentinelAlertRuleAnomaly.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalySettingsVersion">AnomalySettingsVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalyVersion">AnomalyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.multiSelectObservation">MultiSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.prioritizedExcludeObservation">PrioritizedExcludeObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.requiredDataConnector">RequiredDataConnector</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.settingsDefinitionId">SettingsDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.singleSelectObservation">SingleSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList">DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tactics">Tactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.techniques">Techniques</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.thresholdObservation">ThresholdObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList">DataAzurermSentinelAlertRuleAnomalyThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference">DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AnomalySettingsVersion`<sup>Required</sup> <a name="AnomalySettingsVersion" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalySettingsVersion"></a>

```csharp
public double AnomalySettingsVersion { get; }
```

- *Type:* double

---

##### `AnomalyVersion`<sup>Required</sup> <a name="AnomalyVersion" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.anomalyVersion"></a>

```csharp
public string AnomalyVersion { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `MultiSelectObservation`<sup>Required</sup> <a name="MultiSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.multiSelectObservation"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList MultiSelectObservation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList</a>

---

##### `PrioritizedExcludeObservation`<sup>Required</sup> <a name="PrioritizedExcludeObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.prioritizedExcludeObservation"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList PrioritizedExcludeObservation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList</a>

---

##### `RequiredDataConnector`<sup>Required</sup> <a name="RequiredDataConnector" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.requiredDataConnector"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList RequiredDataConnector { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList</a>

---

##### `SettingsDefinitionId`<sup>Required</sup> <a name="SettingsDefinitionId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.settingsDefinitionId"></a>

```csharp
public string SettingsDefinitionId { get; }
```

- *Type:* string

---

##### `SingleSelectObservation`<sup>Required</sup> <a name="SingleSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.singleSelectObservation"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList SingleSelectObservation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList">DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList</a>

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tactics"></a>

```csharp
public string[] Tactics { get; }
```

- *Type:* string[]

---

##### `Techniques`<sup>Required</sup> <a name="Techniques" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.techniques"></a>

```csharp
public string[] Techniques { get; }
```

- *Type:* string[]

---

##### `ThresholdObservation`<sup>Required</sup> <a name="ThresholdObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.thresholdObservation"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyThresholdObservationList ThresholdObservation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList">DataAzurermSentinelAlertRuleAnomalyThresholdObservationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeouts"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference">DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomaly.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSentinelAlertRuleAnomalyConfig <a name="DataAzurermSentinelAlertRuleAnomalyConfig" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string DisplayName = null,
    string Id = null,
    string Name = null,
    DataAzurermSentinelAlertRuleAnomalyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#log_analytics_workspace_id DataAzurermSentinelAlertRuleAnomaly#log_analytics_workspace_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#display_name DataAzurermSentinelAlertRuleAnomaly#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#id DataAzurermSentinelAlertRuleAnomaly#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#name DataAzurermSentinelAlertRuleAnomaly#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyConfig.property.timeouts"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts">DataAzurermSentinelAlertRuleAnomalyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#timeouts DataAzurermSentinelAlertRuleAnomaly#timeouts}

---

### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation {

};
```


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation {

};
```


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector {

};
```


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservation <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalySingleSelectObservation {

};
```


### DataAzurermSentinelAlertRuleAnomalyThresholdObservation <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservation" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyThresholdObservation {

};
```


### DataAzurermSentinelAlertRuleAnomalyTimeouts <a name="DataAzurermSentinelAlertRuleAnomalyTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/sentinel_alert_rule_anomaly#read DataAzurermSentinelAlertRuleAnomaly#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.supportedValues"></a>

```csharp
public string[] SupportedValues { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation">DataAzurermSentinelAlertRuleAnomalyMultiSelectObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.exclude">Exclude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.prioritize">Prioritize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.exclude"></a>

```csharp
public string Exclude { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Prioritize`<sup>Required</sup> <a name="Prioritize" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```csharp
public string Prioritize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation">DataAzurermSentinelAlertRuleAnomalyPrioritizedExcludeObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.connectorId">ConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.dataTypes">DataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.connectorId"></a>

```csharp
public string ConnectorId { get; }
```

- *Type:* string

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.dataTypes"></a>

```csharp
public string[] DataTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnectorOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector">DataAzurermSentinelAlertRuleAnomalyRequiredDataConnector</a>

---


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation">DataAzurermSentinelAlertRuleAnomalySingleSelectObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.supportedValues"></a>

```csharp
public string[] SupportedValues { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalySingleSelectObservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalySingleSelectObservation">DataAzurermSentinelAlertRuleAnomalySingleSelectObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyThresholdObservationList <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservationList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyThresholdObservationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.max">Max</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.min">Min</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation">DataAzurermSentinelAlertRuleAnomalyThresholdObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.max"></a>

```csharp
public string Max { get; }
```

- *Type:* string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.min"></a>

```csharp
public string Min { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleAnomalyThresholdObservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyThresholdObservation">DataAzurermSentinelAlertRuleAnomalyThresholdObservation</a>

---


### DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference <a name="DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleAnomaly.DataAzurermSentinelAlertRuleAnomalyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



