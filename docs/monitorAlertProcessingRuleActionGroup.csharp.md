# `azurerm_monitor_alert_processing_rule_action_group`

Refer to the Terraform Registory for docs: [`azurerm_monitor_alert_processing_rule_action_group`](https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group).

# `monitorAlertProcessingRuleActionGroup` Submodule <a name="`monitorAlertProcessingRuleActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertProcessingRuleActionGroup <a name="MonitorAlertProcessingRuleActionGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group azurerm_monitor_alert_processing_rule_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroup(Construct Scope, string Id, MonitorAlertProcessingRuleActionGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig">MonitorAlertProcessingRuleActionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig">MonitorAlertProcessingRuleActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putCondition"></a>

```csharp
private void PutCondition(MonitorAlertProcessingRuleActionGroupCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putSchedule"></a>

```csharp
private void PutSchedule(MonitorAlertProcessingRuleActionGroupSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitorAlertProcessingRuleActionGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleActionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleActionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MonitorAlertProcessingRuleActionGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference">MonitorAlertProcessingRuleActionGroupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference">MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIdsInput">AddActionGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIds">AddActionGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.condition"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.schedule"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference">MonitorAlertProcessingRuleActionGroupScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeouts"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference">MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference</a>

---

##### `AddActionGroupIdsInput`<sup>Optional</sup> <a name="AddActionGroupIdsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIdsInput"></a>

```csharp
public string[] AddActionGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.conditionInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scheduleInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AddActionGroupIds`<sup>Required</sup> <a name="AddActionGroupIds" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.addActionGroupIds"></a>

```csharp
public string[] AddActionGroupIds { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertProcessingRuleActionGroupCondition <a name="MonitorAlertProcessingRuleActionGroupCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupCondition {
    MonitorAlertProcessingRuleActionGroupConditionAlertContext AlertContext = null,
    MonitorAlertProcessingRuleActionGroupConditionAlertRuleId AlertRuleId = null,
    MonitorAlertProcessingRuleActionGroupConditionAlertRuleName AlertRuleName = null,
    MonitorAlertProcessingRuleActionGroupConditionDescription Description = null,
    MonitorAlertProcessingRuleActionGroupConditionMonitorCondition MonitorCondition = null,
    MonitorAlertProcessingRuleActionGroupConditionMonitorService MonitorService = null,
    MonitorAlertProcessingRuleActionGroupConditionSeverity Severity = null,
    MonitorAlertProcessingRuleActionGroupConditionSignalType SignalType = null,
    MonitorAlertProcessingRuleActionGroupConditionTargetResource TargetResource = null,
    MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup TargetResourceGroup = null,
    MonitorAlertProcessingRuleActionGroupConditionTargetResourceType TargetResourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a></code> | alert_context block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a></code> | alert_rule_id block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleName">AlertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a></code> | alert_rule_name block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a></code> | description block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorCondition">MonitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a></code> | monitor_condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a></code> | monitor_service block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a></code> | severity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.signalType">SignalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a></code> | signal_type block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a></code> | target_resource block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceGroup">TargetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a></code> | target_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a></code> | target_resource_type block. |

---

##### `AlertContext`<sup>Optional</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertContext"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertContext AlertContext { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

alert_context block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#alert_context MonitorAlertProcessingRuleActionGroup#alert_context}

---

##### `AlertRuleId`<sup>Optional</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleId"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleId AlertRuleId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

alert_rule_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#alert_rule_id MonitorAlertProcessingRuleActionGroup#alert_rule_id}

---

##### `AlertRuleName`<sup>Optional</sup> <a name="AlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.alertRuleName"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleName AlertRuleName { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

alert_rule_name block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#alert_rule_name MonitorAlertProcessingRuleActionGroup#alert_rule_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.description"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionDescription Description { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

description block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}

---

##### `MonitorCondition`<sup>Optional</sup> <a name="MonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorCondition"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorCondition MonitorCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

monitor_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#monitor_condition MonitorAlertProcessingRuleActionGroup#monitor_condition}

---

##### `MonitorService`<sup>Optional</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.monitorService"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorService MonitorService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

monitor_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#monitor_service MonitorAlertProcessingRuleActionGroup#monitor_service}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.severity"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSeverity Severity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

severity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#severity MonitorAlertProcessingRuleActionGroup#severity}

---

##### `SignalType`<sup>Optional</sup> <a name="SignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.signalType"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSignalType SignalType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

signal_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#signal_type MonitorAlertProcessingRuleActionGroup#signal_type}

---

##### `TargetResource`<sup>Optional</sup> <a name="TargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResource"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResource TargetResource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#target_resource MonitorAlertProcessingRuleActionGroup#target_resource}

---

##### `TargetResourceGroup`<sup>Optional</sup> <a name="TargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceGroup"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup TargetResourceGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

target_resource_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#target_resource_group MonitorAlertProcessingRuleActionGroup#target_resource_group}

---

##### `TargetResourceType`<sup>Optional</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition.property.targetResourceType"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceType TargetResourceType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

target_resource_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#target_resource_type MonitorAlertProcessingRuleActionGroup#target_resource_type}

---

### MonitorAlertProcessingRuleActionGroupConditionAlertContext <a name="MonitorAlertProcessingRuleActionGroupConditionAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionAlertContext {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionAlertRuleId <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionAlertRuleId {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionAlertRuleName <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionAlertRuleName {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionDescription <a name="MonitorAlertProcessingRuleActionGroupConditionDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionDescription {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionMonitorCondition <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionMonitorCondition {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionMonitorService <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionMonitorService {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionSeverity <a name="MonitorAlertProcessingRuleActionGroupConditionSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionSeverity {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionSignalType <a name="MonitorAlertProcessingRuleActionGroupConditionSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionSignalType {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionTargetResource <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionTargetResource {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConditionTargetResourceType <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionTargetResourceType {
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#operator MonitorAlertProcessingRuleActionGroup#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#values MonitorAlertProcessingRuleActionGroup#values}.

---

### MonitorAlertProcessingRuleActionGroupConfig <a name="MonitorAlertProcessingRuleActionGroupConfig" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AddActionGroupIds,
    string Name,
    string ResourceGroupName,
    string[] Scopes,
    MonitorAlertProcessingRuleActionGroupCondition Condition = null,
    string Description = null,
    object Enabled = null,
    string Id = null,
    MonitorAlertProcessingRuleActionGroupSchedule Schedule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MonitorAlertProcessingRuleActionGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.addActionGroupIds">AddActionGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#add_action_group_ids MonitorAlertProcessingRuleActionGroup#add_action_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#name MonitorAlertProcessingRuleActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#resource_group_name MonitorAlertProcessingRuleActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#scopes MonitorAlertProcessingRuleActionGroup#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#enabled MonitorAlertProcessingRuleActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#id MonitorAlertProcessingRuleActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#tags MonitorAlertProcessingRuleActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AddActionGroupIds`<sup>Required</sup> <a name="AddActionGroupIds" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.addActionGroupIds"></a>

```csharp
public string[] AddActionGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#add_action_group_ids MonitorAlertProcessingRuleActionGroup#add_action_group_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#name MonitorAlertProcessingRuleActionGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#resource_group_name MonitorAlertProcessingRuleActionGroup#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#scopes MonitorAlertProcessingRuleActionGroup#scopes}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.condition"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#condition MonitorAlertProcessingRuleActionGroup#condition}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#description MonitorAlertProcessingRuleActionGroup#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#enabled MonitorAlertProcessingRuleActionGroup#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#id MonitorAlertProcessingRuleActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.schedule"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#schedule MonitorAlertProcessingRuleActionGroup#schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#tags MonitorAlertProcessingRuleActionGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConfig.property.timeouts"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts">MonitorAlertProcessingRuleActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#timeouts MonitorAlertProcessingRuleActionGroup#timeouts}

---

### MonitorAlertProcessingRuleActionGroupSchedule <a name="MonitorAlertProcessingRuleActionGroupSchedule" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupSchedule {
    string EffectiveFrom = null,
    string EffectiveUntil = null,
    MonitorAlertProcessingRuleActionGroupScheduleRecurrence Recurrence = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveFrom">EffectiveFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#effective_from MonitorAlertProcessingRuleActionGroup#effective_from}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveUntil">EffectiveUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#effective_until MonitorAlertProcessingRuleActionGroup#effective_until}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#time_zone MonitorAlertProcessingRuleActionGroup#time_zone}. |

---

##### `EffectiveFrom`<sup>Optional</sup> <a name="EffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveFrom"></a>

```csharp
public string EffectiveFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#effective_from MonitorAlertProcessingRuleActionGroup#effective_from}.

---

##### `EffectiveUntil`<sup>Optional</sup> <a name="EffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.effectiveUntil"></a>

```csharp
public string EffectiveUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#effective_until MonitorAlertProcessingRuleActionGroup#effective_until}.

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.recurrence"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrence Recurrence { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#recurrence MonitorAlertProcessingRuleActionGroup#recurrence}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#time_zone MonitorAlertProcessingRuleActionGroup#time_zone}.

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrence <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrence {
    object Daily = null,
    object Monthly = null,
    object Weekly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.daily">Daily</a></code> | <code>object</code> | daily block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.monthly">Monthly</a></code> | <code>object</code> | monthly block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.weekly">Weekly</a></code> | <code>object</code> | weekly block. |

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.daily"></a>

```csharp
public object Daily { get; set; }
```

- *Type:* object

daily block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#daily MonitorAlertProcessingRuleActionGroup#daily}

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.monthly"></a>

```csharp
public object Monthly { get; set; }
```

- *Type:* object

monthly block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#monthly MonitorAlertProcessingRuleActionGroup#monthly}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence.property.weekly"></a>

```csharp
public object Weekly { get; set; }
```

- *Type:* object

weekly block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#weekly MonitorAlertProcessingRuleActionGroup#weekly}

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily {
    string EndTime,
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDaily.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}.

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly {
    double[] DaysOfMonth,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#days_of_month MonitorAlertProcessingRuleActionGroup#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}. |

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#days_of_month MonitorAlertProcessingRuleActionGroup#days_of_month}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthly.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}.

---

### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly {
    string[] DaysOfWeek,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#days_of_week MonitorAlertProcessingRuleActionGroup#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}. |

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#days_of_week MonitorAlertProcessingRuleActionGroup#days_of_week}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#end_time MonitorAlertProcessingRuleActionGroup#end_time}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeekly.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#start_time MonitorAlertProcessingRuleActionGroup#start_time}.

---

### MonitorAlertProcessingRuleActionGroupTimeouts <a name="MonitorAlertProcessingRuleActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#create MonitorAlertProcessingRuleActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#delete MonitorAlertProcessingRuleActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#read MonitorAlertProcessingRuleActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#update MonitorAlertProcessingRuleActionGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#create MonitorAlertProcessingRuleActionGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#delete MonitorAlertProcessingRuleActionGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#read MonitorAlertProcessingRuleActionGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_alert_processing_rule_action_group#update MonitorAlertProcessingRuleActionGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertContext InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

---


### MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

---


### MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

---


### MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

---


### MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

---


### MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

---


### MonitorAlertProcessingRuleActionGroupConditionOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertContext">PutAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleId">PutAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleName">PutAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putDescription">PutDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorCondition">PutMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorService">PutMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSeverity">PutSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSignalType">PutSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResource">PutTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceGroup">PutTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceType">PutTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertContext">ResetAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleId">ResetAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleName">ResetAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorCondition">ResetMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorService">ResetMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSignalType">ResetSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResource">ResetTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceGroup">ResetTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceType">ResetTargetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlertContext` <a name="PutAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertContext"></a>

```csharp
private void PutAlertContext(MonitorAlertProcessingRuleActionGroupConditionAlertContext Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertContext.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

---

##### `PutAlertRuleId` <a name="PutAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleId"></a>

```csharp
private void PutAlertRuleId(MonitorAlertProcessingRuleActionGroupConditionAlertRuleId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

---

##### `PutAlertRuleName` <a name="PutAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleName"></a>

```csharp
private void PutAlertRuleName(MonitorAlertProcessingRuleActionGroupConditionAlertRuleName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putAlertRuleName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

---

##### `PutDescription` <a name="PutDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putDescription"></a>

```csharp
private void PutDescription(MonitorAlertProcessingRuleActionGroupConditionDescription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

---

##### `PutMonitorCondition` <a name="PutMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorCondition"></a>

```csharp
private void PutMonitorCondition(MonitorAlertProcessingRuleActionGroupConditionMonitorCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

---

##### `PutMonitorService` <a name="PutMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorService"></a>

```csharp
private void PutMonitorService(MonitorAlertProcessingRuleActionGroupConditionMonitorService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putMonitorService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

---

##### `PutSeverity` <a name="PutSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSeverity"></a>

```csharp
private void PutSeverity(MonitorAlertProcessingRuleActionGroupConditionSeverity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSeverity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

---

##### `PutSignalType` <a name="PutSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSignalType"></a>

```csharp
private void PutSignalType(MonitorAlertProcessingRuleActionGroupConditionSignalType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putSignalType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

---

##### `PutTargetResource` <a name="PutTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResource"></a>

```csharp
private void PutTargetResource(MonitorAlertProcessingRuleActionGroupConditionTargetResource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

---

##### `PutTargetResourceGroup` <a name="PutTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceGroup"></a>

```csharp
private void PutTargetResourceGroup(MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

---

##### `PutTargetResourceType` <a name="PutTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceType"></a>

```csharp
private void PutTargetResourceType(MonitorAlertProcessingRuleActionGroupConditionTargetResourceType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.putTargetResourceType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

---

##### `ResetAlertContext` <a name="ResetAlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertContext"></a>

```csharp
private void ResetAlertContext()
```

##### `ResetAlertRuleId` <a name="ResetAlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleId"></a>

```csharp
private void ResetAlertRuleId()
```

##### `ResetAlertRuleName` <a name="ResetAlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetAlertRuleName"></a>

```csharp
private void ResetAlertRuleName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMonitorCondition` <a name="ResetMonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorCondition"></a>

```csharp
private void ResetMonitorCondition()
```

##### `ResetMonitorService` <a name="ResetMonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetMonitorService"></a>

```csharp
private void ResetMonitorService()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetSignalType` <a name="ResetSignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetSignalType"></a>

```csharp
private void ResetSignalType()
```

##### `ResetTargetResource` <a name="ResetTargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResource"></a>

```csharp
private void ResetTargetResource()
```

##### `ResetTargetResourceGroup` <a name="ResetTargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceGroup"></a>

```csharp
private void ResetTargetResourceGroup()
```

##### `ResetTargetResourceType` <a name="ResetTargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.resetTargetResourceType"></a>

```csharp
private void ResetTargetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContext">AlertContext</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleId">AlertRuleId</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleName">AlertRuleName</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.description">Description</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference">MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorCondition">MonitorCondition</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorService">MonitorService</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference">MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalType">SignalType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroup">TargetResourceGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContextInput">AlertContextInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleIdInput">AlertRuleIdInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleNameInput">AlertRuleNameInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorConditionInput">MonitorConditionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorServiceInput">MonitorServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severityInput">SeverityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalTypeInput">SignalTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroupInput">TargetResourceGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceInput">TargetResourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceTypeInput">TargetResourceTypeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertContext`<sup>Required</sup> <a name="AlertContext" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContext"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference AlertContext { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertContextOutputReference</a>

---

##### `AlertRuleId`<sup>Required</sup> <a name="AlertRuleId" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleId"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference AlertRuleId { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleIdOutputReference</a>

---

##### `AlertRuleName`<sup>Required</sup> <a name="AlertRuleName" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleName"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference AlertRuleName { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference">MonitorAlertProcessingRuleActionGroupConditionAlertRuleNameOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.description"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference Description { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference">MonitorAlertProcessingRuleActionGroupConditionDescriptionOutputReference</a>

---

##### `MonitorCondition`<sup>Required</sup> <a name="MonitorCondition" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorCondition"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference MonitorCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorConditionOutputReference</a>

---

##### `MonitorService`<sup>Required</sup> <a name="MonitorService" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorService"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference MonitorService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference">MonitorAlertProcessingRuleActionGroupConditionMonitorServiceOutputReference</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severity"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference Severity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference">MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference</a>

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalType"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference SignalType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResource"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference TargetResource { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference</a>

---

##### `TargetResourceGroup`<sup>Required</sup> <a name="TargetResourceGroup" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroup"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference TargetResourceGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference</a>

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceType"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference TargetResourceType { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference">MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference</a>

---

##### `AlertContextInput`<sup>Optional</sup> <a name="AlertContextInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertContextInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertContext AlertContextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertContext">MonitorAlertProcessingRuleActionGroupConditionAlertContext</a>

---

##### `AlertRuleIdInput`<sup>Optional</sup> <a name="AlertRuleIdInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleIdInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleId AlertRuleIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleId">MonitorAlertProcessingRuleActionGroupConditionAlertRuleId</a>

---

##### `AlertRuleNameInput`<sup>Optional</sup> <a name="AlertRuleNameInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.alertRuleNameInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionAlertRuleName AlertRuleNameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionAlertRuleName">MonitorAlertProcessingRuleActionGroupConditionAlertRuleName</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.descriptionInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionDescription DescriptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionDescription">MonitorAlertProcessingRuleActionGroupConditionDescription</a>

---

##### `MonitorConditionInput`<sup>Optional</sup> <a name="MonitorConditionInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorConditionInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorCondition MonitorConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorCondition">MonitorAlertProcessingRuleActionGroupConditionMonitorCondition</a>

---

##### `MonitorServiceInput`<sup>Optional</sup> <a name="MonitorServiceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.monitorServiceInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionMonitorService MonitorServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionMonitorService">MonitorAlertProcessingRuleActionGroupConditionMonitorService</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.severityInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSeverity SeverityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

---

##### `SignalTypeInput`<sup>Optional</sup> <a name="SignalTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.signalTypeInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSignalType SignalTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

---

##### `TargetResourceGroupInput`<sup>Optional</sup> <a name="TargetResourceGroupInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceGroupInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup TargetResourceGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResource TargetResourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

---

##### `TargetResourceTypeInput`<sup>Optional</sup> <a name="TargetResourceTypeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.targetResourceTypeInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceType TargetResourceTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupCondition">MonitorAlertProcessingRuleActionGroupCondition</a>

---


### MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverityOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSeverity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSeverity">MonitorAlertProcessingRuleActionGroupConditionSeverity</a>

---


### MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalTypeOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionSignalType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionSignalType">MonitorAlertProcessingRuleActionGroupConditionSignalType</a>

---


### MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroupOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup">MonitorAlertProcessingRuleActionGroupConditionTargetResourceGroup</a>

---


### MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResource">MonitorAlertProcessingRuleActionGroupConditionTargetResource</a>

---


### MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference <a name="MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceTypeOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupConditionTargetResourceType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupConditionTargetResourceType">MonitorAlertProcessingRuleActionGroupConditionTargetResourceType</a>

---


### MonitorAlertProcessingRuleActionGroupScheduleOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveFrom">ResetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveUntil">ResetEffectiveUntil</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.putRecurrence"></a>

```csharp
private void PutRecurrence(MonitorAlertProcessingRuleActionGroupScheduleRecurrence Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

---

##### `ResetEffectiveFrom` <a name="ResetEffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveFrom"></a>

```csharp
private void ResetEffectiveFrom()
```

##### `ResetEffectiveUntil` <a name="ResetEffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetEffectiveUntil"></a>

```csharp
private void ResetEffectiveUntil()
```

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFromInput">EffectiveFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntilInput">EffectiveUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFrom">EffectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntil">EffectiveUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrence"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference</a>

---

##### `EffectiveFromInput`<sup>Optional</sup> <a name="EffectiveFromInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFromInput"></a>

```csharp
public string EffectiveFromInput { get; }
```

- *Type:* string

---

##### `EffectiveUntilInput`<sup>Optional</sup> <a name="EffectiveUntilInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntilInput"></a>

```csharp
public string EffectiveUntilInput { get; }
```

- *Type:* string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.recurrenceInput"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrence RecurrenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `EffectiveFrom`<sup>Required</sup> <a name="EffectiveFrom" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveFrom"></a>

```csharp
public string EffectiveFrom { get; }
```

- *Type:* string

---

##### `EffectiveUntil`<sup>Required</sup> <a name="EffectiveUntil" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.effectiveUntil"></a>

```csharp
public string EffectiveUntil { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupSchedule">MonitorAlertProcessingRuleActionGroupSchedule</a>

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.get"></a>

```csharp
private MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.get"></a>

```csharp
private MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonthInput"></a>

```csharp
public double[] DaysOfMonthInput { get; }
```

- *Type:* double[]

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaily` <a name="PutDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putDaily"></a>

```csharp
private void PutDaily(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putDaily.parameter.value"></a>

- *Type:* object

---

##### `PutMonthly` <a name="PutMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putMonthly"></a>

```csharp
private void PutMonthly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putMonthly.parameter.value"></a>

- *Type:* object

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putWeekly"></a>

```csharp
private void PutWeekly(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.putWeekly.parameter.value"></a>

- *Type:* object

---

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetMonthly"></a>

```csharp
private void ResetMonthly()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.resetWeekly"></a>

```csharp
private void ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.dailyInput">DailyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.daily"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList Daily { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceDailyList</a>

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthly"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList Monthly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceMonthlyList</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weekly"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList Weekly { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList">MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.dailyInput"></a>

```csharp
public object DailyInput { get; }
```

- *Type:* object

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.monthlyInput"></a>

```csharp
public object MonthlyInput { get; }
```

- *Type:* object

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.weeklyInput"></a>

```csharp
public object WeeklyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceOutputReference.property.internalValue"></a>

```csharp
public MonitorAlertProcessingRuleActionGroupScheduleRecurrence InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrence">MonitorAlertProcessingRuleActionGroupScheduleRecurrence</a>

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.get"></a>

```csharp
private MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference <a name="MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupScheduleRecurrenceWeeklyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference <a name="MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertProcessingRuleActionGroup.MonitorAlertProcessingRuleActionGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



