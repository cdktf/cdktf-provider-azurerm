# `springCloudElasticApplicationPerformanceMonitoring` Submodule <a name="`springCloudElasticApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudElasticApplicationPerformanceMonitoring <a name="SpringCloudElasticApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring azurerm_spring_cloud_elastic_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudElasticApplicationPerformanceMonitoring(Construct Scope, string Id, SpringCloudElasticApplicationPerformanceMonitoringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig">SpringCloudElasticApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig">SpringCloudElasticApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetGloballyEnabled">ResetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudElasticApplicationPerformanceMonitoringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

---

##### `ResetGloballyEnabled` <a name="ResetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```csharp
private void ResetGloballyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudElasticApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudElasticApplicationPerformanceMonitoring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudElasticApplicationPerformanceMonitoring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudElasticApplicationPerformanceMonitoring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudElasticApplicationPerformanceMonitoring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudElasticApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudElasticApplicationPerformanceMonitoring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudElasticApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudElasticApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackagesInput">ApplicationPackagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabledInput">GloballyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrlInput">ServerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackages">ApplicationPackages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrl">ServerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeouts"></a>

```csharp
public SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `ApplicationPackagesInput`<sup>Optional</sup> <a name="ApplicationPackagesInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackagesInput"></a>

```csharp
public string[] ApplicationPackagesInput { get; }
```

- *Type:* string[]

---

##### `GloballyEnabledInput`<sup>Optional</sup> <a name="GloballyEnabledInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```csharp
public object GloballyEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerUrlInput`<sup>Optional</sup> <a name="ServerUrlInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrlInput"></a>

```csharp
public string ServerUrlInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationPackages`<sup>Required</sup> <a name="ApplicationPackages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.applicationPackages"></a>

```csharp
public string[] ApplicationPackages { get; }
```

- *Type:* string[]

---

##### `GloballyEnabled`<sup>Required</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serverUrl"></a>

```csharp
public string ServerUrl { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudElasticApplicationPerformanceMonitoringConfig <a name="SpringCloudElasticApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudElasticApplicationPerformanceMonitoringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ApplicationPackages,
    string Name,
    string ServerUrl,
    string ServiceName,
    string SpringCloudServiceId,
    object GloballyEnabled = null,
    string Id = null,
    SpringCloudElasticApplicationPerformanceMonitoringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.applicationPackages">ApplicationPackages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serverUrl">ServerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationPackages`<sup>Required</sup> <a name="ApplicationPackages" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.applicationPackages"></a>

```csharp
public string[] ApplicationPackages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#application_packages SpringCloudElasticApplicationPerformanceMonitoring#application_packages}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#name SpringCloudElasticApplicationPerformanceMonitoring#name}.

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serverUrl"></a>

```csharp
public string ServerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#server_url SpringCloudElasticApplicationPerformanceMonitoring#server_url}.

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#service_name SpringCloudElasticApplicationPerformanceMonitoring#service_name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#spring_cloud_service_id SpringCloudElasticApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `GloballyEnabled`<sup>Optional</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#globally_enabled SpringCloudElasticApplicationPerformanceMonitoring#globally_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#id SpringCloudElasticApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```csharp
public SpringCloudElasticApplicationPerformanceMonitoringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts">SpringCloudElasticApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#timeouts SpringCloudElasticApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudElasticApplicationPerformanceMonitoringTimeouts <a name="SpringCloudElasticApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudElasticApplicationPerformanceMonitoringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#create SpringCloudElasticApplicationPerformanceMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#delete SpringCloudElasticApplicationPerformanceMonitoring#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#read SpringCloudElasticApplicationPerformanceMonitoring#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/spring_cloud_elastic_application_performance_monitoring#update SpringCloudElasticApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudElasticApplicationPerformanceMonitoring.SpringCloudElasticApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



