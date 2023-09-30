# `azurerm_log_analytics_datasource_windows_performance_counter`

Refer to the Terraform Registory for docs: [`azurerm_log_analytics_datasource_windows_performance_counter`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter).

# `logAnalyticsDatasourceWindowsPerformanceCounter` Submodule <a name="`logAnalyticsDatasourceWindowsPerformanceCounter` Submodule" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounter <a name="LogAnalyticsDatasourceWindowsPerformanceCounter" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter azurerm_log_analytics_datasource_windows_performance_counter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsDatasourceWindowsPerformanceCounter(Construct Scope, string Id, LogAnalyticsDatasourceWindowsPerformanceCounterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig">LogAnalyticsDatasourceWindowsPerformanceCounterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig">LogAnalyticsDatasourceWindowsPerformanceCounterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts"></a>

```csharp
private void PutTimeouts(LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsDatasourceWindowsPerformanceCounter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsDatasourceWindowsPerformanceCounter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogAnalyticsDatasourceWindowsPerformanceCounter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference">LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterNameInput">CounterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectNameInput">ObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterName">CounterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectName">ObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceName">WorkspaceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeouts"></a>

```csharp
public LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference">LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference</a>

---

##### `CounterNameInput`<sup>Optional</sup> <a name="CounterNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterNameInput"></a>

```csharp
public string CounterNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectNameInput`<sup>Optional</sup> <a name="ObjectNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectNameInput"></a>

```csharp
public string ObjectNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceNameInput"></a>

```csharp
public string WorkspaceNameInput { get; }
```

- *Type:* string

---

##### `CounterName`<sup>Required</sup> <a name="CounterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.counterName"></a>

```csharp
public string CounterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.objectName"></a>

```csharp
public string ObjectName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.workspaceName"></a>

```csharp
public string WorkspaceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounterConfig <a name="LogAnalyticsDatasourceWindowsPerformanceCounterConfig" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsDatasourceWindowsPerformanceCounterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CounterName,
    string InstanceName,
    double IntervalSeconds,
    string Name,
    string ObjectName,
    string ResourceGroupName,
    string WorkspaceName,
    string Id = null,
    LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.counterName">CounterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.objectName">ObjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.workspaceName">WorkspaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CounterName`<sup>Required</sup> <a name="CounterName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.counterName"></a>

```csharp
public string CounterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#counter_name LogAnalyticsDatasourceWindowsPerformanceCounter#counter_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#instance_name LogAnalyticsDatasourceWindowsPerformanceCounter#instance_name}.

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#interval_seconds LogAnalyticsDatasourceWindowsPerformanceCounter#interval_seconds}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#name LogAnalyticsDatasourceWindowsPerformanceCounter#name}.

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.objectName"></a>

```csharp
public string ObjectName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#object_name LogAnalyticsDatasourceWindowsPerformanceCounter#object_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#resource_group_name LogAnalyticsDatasourceWindowsPerformanceCounter#resource_group_name}.

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.workspaceName"></a>

```csharp
public string WorkspaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#workspace_name LogAnalyticsDatasourceWindowsPerformanceCounter#workspace_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#id LogAnalyticsDatasourceWindowsPerformanceCounter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterConfig.property.timeouts"></a>

```csharp
public LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts">LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#timeouts LogAnalyticsDatasourceWindowsPerformanceCounter#timeouts}

---

### LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts <a name="LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#create LogAnalyticsDatasourceWindowsPerformanceCounter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#delete LogAnalyticsDatasourceWindowsPerformanceCounter#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#read LogAnalyticsDatasourceWindowsPerformanceCounter#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/log_analytics_datasource_windows_performance_counter#update LogAnalyticsDatasourceWindowsPerformanceCounter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference <a name="LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logAnalyticsDatasourceWindowsPerformanceCounter.LogAnalyticsDatasourceWindowsPerformanceCounterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



