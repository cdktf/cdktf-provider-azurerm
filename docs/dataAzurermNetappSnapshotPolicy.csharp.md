# `data_azurerm_netapp_snapshot_policy`

Refer to the Terraform Registory for docs: [`data_azurerm_netapp_snapshot_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy).

# `dataAzurermNetappSnapshotPolicy` Submodule <a name="`dataAzurermNetappSnapshotPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappSnapshotPolicy <a name="DataAzurermNetappSnapshotPolicy" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy azurerm_netapp_snapshot_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicy(Construct Scope, string Id, DataAzurermNetappSnapshotPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig">DataAzurermNetappSnapshotPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig">DataAzurermNetappSnapshotPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermNetappSnapshotPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermNetappSnapshotPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermNetappSnapshotPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermNetappSnapshotPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList">DataAzurermNetappSnapshotPolicyDailyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList">DataAzurermNetappSnapshotPolicyHourlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList">DataAzurermNetappSnapshotPolicyMonthlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference">DataAzurermNetappSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList">DataAzurermNetappSnapshotPolicyWeeklyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.dailySchedule"></a>

```csharp
public DataAzurermNetappSnapshotPolicyDailyScheduleList DailySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList">DataAzurermNetappSnapshotPolicyDailyScheduleList</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.hourlySchedule"></a>

```csharp
public DataAzurermNetappSnapshotPolicyHourlyScheduleList HourlySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList">DataAzurermNetappSnapshotPolicyHourlyScheduleList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.monthlySchedule"></a>

```csharp
public DataAzurermNetappSnapshotPolicyMonthlyScheduleList MonthlySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList">DataAzurermNetappSnapshotPolicyMonthlyScheduleList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeouts"></a>

```csharp
public DataAzurermNetappSnapshotPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference">DataAzurermNetappSnapshotPolicyTimeoutsOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.weeklySchedule"></a>

```csharp
public DataAzurermNetappSnapshotPolicyWeeklyScheduleList WeeklySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList">DataAzurermNetappSnapshotPolicyWeeklyScheduleList</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappSnapshotPolicyConfig <a name="DataAzurermNetappSnapshotPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermNetappSnapshotPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#account_name DataAzurermNetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#name DataAzurermNetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#resource_group_name DataAzurermNetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#id DataAzurermNetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#account_name DataAzurermNetappSnapshotPolicy#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#name DataAzurermNetappSnapshotPolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#resource_group_name DataAzurermNetappSnapshotPolicy#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#id DataAzurermNetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyConfig.property.timeouts"></a>

```csharp
public DataAzurermNetappSnapshotPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts">DataAzurermNetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#timeouts DataAzurermNetappSnapshotPolicy#timeouts}

---

### DataAzurermNetappSnapshotPolicyDailySchedule <a name="DataAzurermNetappSnapshotPolicyDailySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyDailySchedule {

};
```


### DataAzurermNetappSnapshotPolicyHourlySchedule <a name="DataAzurermNetappSnapshotPolicyHourlySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyHourlySchedule {

};
```


### DataAzurermNetappSnapshotPolicyMonthlySchedule <a name="DataAzurermNetappSnapshotPolicyMonthlySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyMonthlySchedule {

};
```


### DataAzurermNetappSnapshotPolicyTimeouts <a name="DataAzurermNetappSnapshotPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#read DataAzurermNetappSnapshotPolicy#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/netapp_snapshot_policy#read DataAzurermNetappSnapshotPolicy#read}.

---

### DataAzurermNetappSnapshotPolicyWeeklySchedule <a name="DataAzurermNetappSnapshotPolicyWeeklySchedule" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyWeeklySchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappSnapshotPolicyDailyScheduleList <a name="DataAzurermNetappSnapshotPolicyDailyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyDailyScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.get"></a>

```csharp
private DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule">DataAzurermNetappSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermNetappSnapshotPolicyDailySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyDailySchedule">DataAzurermNetappSnapshotPolicyDailySchedule</a>

---


### DataAzurermNetappSnapshotPolicyHourlyScheduleList <a name="DataAzurermNetappSnapshotPolicyHourlyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyHourlyScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.get"></a>

```csharp
private DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule">DataAzurermNetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermNetappSnapshotPolicyHourlySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyHourlySchedule">DataAzurermNetappSnapshotPolicyHourlySchedule</a>

---


### DataAzurermNetappSnapshotPolicyMonthlyScheduleList <a name="DataAzurermNetappSnapshotPolicyMonthlyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyMonthlyScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.get"></a>

```csharp
private DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule">DataAzurermNetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```csharp
public double[] DaysOfMonth { get; }
```

- *Type:* double[]

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermNetappSnapshotPolicyMonthlySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyMonthlySchedule">DataAzurermNetappSnapshotPolicyMonthlySchedule</a>

---


### DataAzurermNetappSnapshotPolicyTimeoutsOutputReference <a name="DataAzurermNetappSnapshotPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataAzurermNetappSnapshotPolicyWeeklyScheduleList <a name="DataAzurermNetappSnapshotPolicyWeeklyScheduleList" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyWeeklyScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.get"></a>

```csharp
private DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference <a name="DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute">Minute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule">DataAzurermNetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```csharp
public double Hour { get; }
```

- *Type:* double

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```csharp
public double Minute { get; }
```

- *Type:* double

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```csharp
public double SnapshotsToKeep { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermNetappSnapshotPolicyWeeklySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappSnapshotPolicy.DataAzurermNetappSnapshotPolicyWeeklySchedule">DataAzurermNetappSnapshotPolicyWeeklySchedule</a>

---



