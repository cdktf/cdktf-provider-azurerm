# `springCloudDynatraceApplicationPerformanceMonitoring` Submodule <a name="`springCloudDynatraceApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoring <a name="SpringCloudDynatraceApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring azurerm_spring_cloud_dynatrace_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDynatraceApplicationPerformanceMonitoring(Construct Scope, string Id, SpringCloudDynatraceApplicationPerformanceMonitoringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig">SpringCloudDynatraceApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig">SpringCloudDynatraceApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled">ResetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl"></a>

```csharp
private void ResetApiUrl()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId"></a>

```csharp
private void ResetEnvironmentId()
```

##### `ResetGloballyEnabled` <a name="ResetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```csharp
private void ResetGloballyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDynatraceApplicationPerformanceMonitoring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDynatraceApplicationPerformanceMonitoring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDynatraceApplicationPerformanceMonitoring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDynatraceApplicationPerformanceMonitoring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudDynatraceApplicationPerformanceMonitoring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudDynatraceApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudDynatraceApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput">ConnectionPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput">GloballyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput">TenantTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint">ConnectionPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken">TenantToken</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts"></a>

```csharp
public SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `ConnectionPointInput`<sup>Optional</sup> <a name="ConnectionPointInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput"></a>

```csharp
public string ConnectionPointInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `GloballyEnabledInput`<sup>Optional</sup> <a name="GloballyEnabledInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```csharp
public object GloballyEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `TenantTokenInput`<sup>Optional</sup> <a name="TenantTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput"></a>

```csharp
public string TenantTokenInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `ConnectionPoint`<sup>Required</sup> <a name="ConnectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint"></a>

```csharp
public string ConnectionPoint { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `GloballyEnabled`<sup>Required</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `TenantToken`<sup>Required</sup> <a name="TenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken"></a>

```csharp
public string TenantToken { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringConfig <a name="SpringCloudDynatraceApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDynatraceApplicationPerformanceMonitoringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConnectionPoint,
    string Name,
    string SpringCloudServiceId,
    string Tenant,
    string TenantToken,
    string ApiToken = null,
    string ApiUrl = null,
    string EnvironmentId = null,
    object GloballyEnabled = null,
    string Id = null,
    SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint">ConnectionPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant">Tenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken">TenantToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken">ApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl">ApiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConnectionPoint`<sup>Required</sup> <a name="ConnectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint"></a>

```csharp
public string ConnectionPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}.

---

##### `TenantToken`<sup>Required</sup> <a name="TenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken"></a>

```csharp
public string TenantToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}.

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}.

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}.

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}.

---

##### `GloballyEnabled`<sup>Optional</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```csharp
public SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#timeouts SpringCloudDynatraceApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.6.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



