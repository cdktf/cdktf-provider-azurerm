# `data_azurerm_sentinel_alert_rule_template`

Refer to the Terraform Registory for docs: [`data_azurerm_sentinel_alert_rule_template`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template).

# `dataAzurermSentinelAlertRuleTemplate` Submodule <a name="`dataAzurermSentinelAlertRuleTemplate` Submodule" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSentinelAlertRuleTemplate <a name="DataAzurermSentinelAlertRuleTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template azurerm_sentinel_alert_rule_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplate(Construct Scope, string Id, DataAzurermSentinelAlertRuleTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig">DataAzurermSentinelAlertRuleTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig">DataAzurermSentinelAlertRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermSentinelAlertRuleTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSentinelAlertRuleTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSentinelAlertRuleTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSentinelAlertRuleTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nrtTemplate">NrtTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList">DataAzurermSentinelAlertRuleTemplateNrtTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.scheduledTemplate">ScheduledTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList">DataAzurermSentinelAlertRuleTemplateScheduledTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.securityIncidentTemplate">SecurityIncidentTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference">DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `NrtTemplate`<sup>Required</sup> <a name="NrtTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nrtTemplate"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateNrtTemplateList NrtTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList">DataAzurermSentinelAlertRuleTemplateNrtTemplateList</a>

---

##### `ScheduledTemplate`<sup>Required</sup> <a name="ScheduledTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.scheduledTemplate"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateScheduledTemplateList ScheduledTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList">DataAzurermSentinelAlertRuleTemplateScheduledTemplateList</a>

---

##### `SecurityIncidentTemplate`<sup>Required</sup> <a name="SecurityIncidentTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.securityIncidentTemplate"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList SecurityIncidentTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeouts"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference">DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceIdInput"></a>

```csharp
public string LogAnalyticsWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSentinelAlertRuleTemplateConfig <a name="DataAzurermSentinelAlertRuleTemplateConfig" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogAnalyticsWorkspaceId,
    string DisplayName = null,
    string Id = null,
    string Name = null,
    DataAzurermSentinelAlertRuleTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.logAnalyticsWorkspaceId"></a>

```csharp
public string LogAnalyticsWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#log_analytics_workspace_id DataAzurermSentinelAlertRuleTemplate#log_analytics_workspace_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#display_name DataAzurermSentinelAlertRuleTemplate#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#id DataAzurermSentinelAlertRuleTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#name DataAzurermSentinelAlertRuleTemplate#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateConfig.property.timeouts"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts">DataAzurermSentinelAlertRuleTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#timeouts DataAzurermSentinelAlertRuleTemplate#timeouts}

---

### DataAzurermSentinelAlertRuleTemplateNrtTemplate <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateNrtTemplate {

};
```


### DataAzurermSentinelAlertRuleTemplateScheduledTemplate <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateScheduledTemplate {

};
```


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate {

};
```


### DataAzurermSentinelAlertRuleTemplateTimeouts <a name="DataAzurermSentinelAlertRuleTemplateTimeouts" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/data-sources/sentinel_alert_rule_template#read DataAzurermSentinelAlertRuleTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSentinelAlertRuleTemplateNrtTemplateList <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateNrtTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.tactics">Tactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate">DataAzurermSentinelAlertRuleTemplateNrtTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.tactics"></a>

```csharp
public string[] Tactics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateNrtTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateNrtTemplate">DataAzurermSentinelAlertRuleTemplateNrtTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateScheduledTemplateList <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateScheduledTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryFrequency">QueryFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryPeriod">QueryPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.tactics">Tactics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerOperator">TriggerOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerThreshold">TriggerThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate">DataAzurermSentinelAlertRuleTemplateScheduledTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `QueryFrequency`<sup>Required</sup> <a name="QueryFrequency" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryFrequency"></a>

```csharp
public string QueryFrequency { get; }
```

- *Type:* string

---

##### `QueryPeriod`<sup>Required</sup> <a name="QueryPeriod" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.queryPeriod"></a>

```csharp
public string QueryPeriod { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.tactics"></a>

```csharp
public string[] Tactics { get; }
```

- *Type:* string[]

---

##### `TriggerOperator`<sup>Required</sup> <a name="TriggerOperator" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerOperator"></a>

```csharp
public string TriggerOperator { get; }
```

- *Type:* string

---

##### `TriggerThreshold`<sup>Required</sup> <a name="TriggerThreshold" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.triggerThreshold"></a>

```csharp
public double TriggerThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateScheduledTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateScheduledTemplate">DataAzurermSentinelAlertRuleTemplateScheduledTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get"></a>

```csharp
private DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference <a name="DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.productFilter">ProductFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ProductFilter`<sup>Required</sup> <a name="ProductFilter" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.productFilter"></a>

```csharp
public string ProductFilter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate">DataAzurermSentinelAlertRuleTemplateSecurityIncidentTemplate</a>

---


### DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference <a name="DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSentinelAlertRuleTemplate.DataAzurermSentinelAlertRuleTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



