# `azurerm_spring_cloud_application_insights_application_performance_monitoring`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_application_insights_application_performance_monitoring`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring).

# `springCloudApplicationInsightsApplicationPerformanceMonitoring` Submodule <a name="`springCloudApplicationInsightsApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoring <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring azurerm_spring_cloud_application_insights_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApplicationInsightsApplicationPerformanceMonitoring(Construct Scope, string Id, SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig">SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig">SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetGloballyEnabled">ResetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleInstance">ResetRoleInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingPercentage">ResetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingRequestsPerSecond">ResetSamplingRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetGloballyEnabled` <a name="ResetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```csharp
private void ResetGloballyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRoleInstance` <a name="ResetRoleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleInstance"></a>

```csharp
private void ResetRoleInstance()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetSamplingPercentage` <a name="ResetSamplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingPercentage"></a>

```csharp
private void ResetSamplingPercentage()
```

##### `ResetSamplingRequestsPerSecond` <a name="ResetSamplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingRequestsPerSecond"></a>

```csharp
private void ResetSamplingRequestsPerSecond()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudApplicationInsightsApplicationPerformanceMonitoring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabledInput">GloballyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstanceInput">RoleInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentageInput">SamplingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecondInput">SamplingRequestsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstance">RoleInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecond">SamplingRequestsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeouts"></a>

```csharp
public SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `GloballyEnabledInput`<sup>Optional</sup> <a name="GloballyEnabledInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```csharp
public object GloballyEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleInstanceInput`<sup>Optional</sup> <a name="RoleInstanceInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstanceInput"></a>

```csharp
public string RoleInstanceInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `SamplingPercentageInput`<sup>Optional</sup> <a name="SamplingPercentageInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentageInput"></a>

```csharp
public double SamplingPercentageInput { get; }
```

- *Type:* double

---

##### `SamplingRequestsPerSecondInput`<sup>Optional</sup> <a name="SamplingRequestsPerSecondInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecondInput"></a>

```csharp
public double SamplingRequestsPerSecondInput { get; }
```

- *Type:* double

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `GloballyEnabled`<sup>Required</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleInstance`<sup>Required</sup> <a name="RoleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstance"></a>

```csharp
public string RoleInstance { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `SamplingPercentage`<sup>Required</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; }
```

- *Type:* double

---

##### `SamplingRequestsPerSecond`<sup>Required</sup> <a name="SamplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecond"></a>

```csharp
public double SamplingRequestsPerSecond { get; }
```

- *Type:* double

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudServiceId,
    string ConnectionString = null,
    object GloballyEnabled = null,
    string Id = null,
    string RoleInstance = null,
    string RoleName = null,
    double SamplingPercentage = null,
    double SamplingRequestsPerSecond = null,
    SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleInstance">RoleInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingPercentage">SamplingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingRequestsPerSecond">SamplingRequestsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}.

---

##### `GloballyEnabled`<sup>Optional</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RoleInstance`<sup>Optional</sup> <a name="RoleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleInstance"></a>

```csharp
public string RoleInstance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}.

---

##### `SamplingPercentage`<sup>Optional</sup> <a name="SamplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingPercentage"></a>

```csharp
public double SamplingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}.

---

##### `SamplingRequestsPerSecond`<sup>Optional</sup> <a name="SamplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingRequestsPerSecond"></a>

```csharp
public double SamplingRequestsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```csharp
public SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#timeouts SpringCloudApplicationInsightsApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#create SpringCloudApplicationInsightsApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#delete SpringCloudApplicationInsightsApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#read SpringCloudApplicationInsightsApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#update SpringCloudApplicationInsightsApplicationPerformanceMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#create SpringCloudApplicationInsightsApplicationPerformanceMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#delete SpringCloudApplicationInsightsApplicationPerformanceMonitoring#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#read SpringCloudApplicationInsightsApplicationPerformanceMonitoring#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#update SpringCloudApplicationInsightsApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



