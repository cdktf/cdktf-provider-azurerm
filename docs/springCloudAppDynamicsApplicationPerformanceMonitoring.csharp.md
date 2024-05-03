# `springCloudAppDynamicsApplicationPerformanceMonitoring` Submodule <a name="`springCloudAppDynamicsApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoring <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring azurerm_spring_cloud_app_dynamics_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudAppDynamicsApplicationPerformanceMonitoring(Construct Scope, string Id, SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig">SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig">SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentApplicationName">ResetAgentApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentNodeName">ResetAgentNodeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentTierName">ResetAgentTierName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentUniqueHostId">ResetAgentUniqueHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerPort">ResetControllerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerSslEnabled">ResetControllerSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetGloballyEnabled">ResetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

---

##### `ResetAgentApplicationName` <a name="ResetAgentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentApplicationName"></a>

```csharp
private void ResetAgentApplicationName()
```

##### `ResetAgentNodeName` <a name="ResetAgentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentNodeName"></a>

```csharp
private void ResetAgentNodeName()
```

##### `ResetAgentTierName` <a name="ResetAgentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentTierName"></a>

```csharp
private void ResetAgentTierName()
```

##### `ResetAgentUniqueHostId` <a name="ResetAgentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetAgentUniqueHostId"></a>

```csharp
private void ResetAgentUniqueHostId()
```

##### `ResetControllerPort` <a name="ResetControllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerPort"></a>

```csharp
private void ResetControllerPort()
```

##### `ResetControllerSslEnabled` <a name="ResetControllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetControllerSslEnabled"></a>

```csharp
private void ResetControllerSslEnabled()
```

##### `ResetGloballyEnabled` <a name="ResetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```csharp
private void ResetGloballyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudAppDynamicsApplicationPerformanceMonitoring.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudAppDynamicsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudAppDynamicsApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudAppDynamicsApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKeyInput">AgentAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountNameInput">AgentAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationNameInput">AgentApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeNameInput">AgentNodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierNameInput">AgentTierNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostIdInput">AgentUniqueHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostNameInput">ControllerHostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPortInput">ControllerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabledInput">ControllerSslEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabledInput">GloballyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKey">AgentAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountName">AgentAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationName">AgentApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeName">AgentNodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierName">AgentTierName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostId">AgentUniqueHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostName">ControllerHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPort">ControllerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabled">ControllerSslEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeouts"></a>

```csharp
public SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `AgentAccountAccessKeyInput`<sup>Optional</sup> <a name="AgentAccountAccessKeyInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKeyInput"></a>

```csharp
public string AgentAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `AgentAccountNameInput`<sup>Optional</sup> <a name="AgentAccountNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountNameInput"></a>

```csharp
public string AgentAccountNameInput { get; }
```

- *Type:* string

---

##### `AgentApplicationNameInput`<sup>Optional</sup> <a name="AgentApplicationNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationNameInput"></a>

```csharp
public string AgentApplicationNameInput { get; }
```

- *Type:* string

---

##### `AgentNodeNameInput`<sup>Optional</sup> <a name="AgentNodeNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeNameInput"></a>

```csharp
public string AgentNodeNameInput { get; }
```

- *Type:* string

---

##### `AgentTierNameInput`<sup>Optional</sup> <a name="AgentTierNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierNameInput"></a>

```csharp
public string AgentTierNameInput { get; }
```

- *Type:* string

---

##### `AgentUniqueHostIdInput`<sup>Optional</sup> <a name="AgentUniqueHostIdInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostIdInput"></a>

```csharp
public string AgentUniqueHostIdInput { get; }
```

- *Type:* string

---

##### `ControllerHostNameInput`<sup>Optional</sup> <a name="ControllerHostNameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostNameInput"></a>

```csharp
public string ControllerHostNameInput { get; }
```

- *Type:* string

---

##### `ControllerPortInput`<sup>Optional</sup> <a name="ControllerPortInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPortInput"></a>

```csharp
public double ControllerPortInput { get; }
```

- *Type:* double

---

##### `ControllerSslEnabledInput`<sup>Optional</sup> <a name="ControllerSslEnabledInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabledInput"></a>

```csharp
public object ControllerSslEnabledInput { get; }
```

- *Type:* object

---

##### `GloballyEnabledInput`<sup>Optional</sup> <a name="GloballyEnabledInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```csharp
public object GloballyEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgentAccountAccessKey`<sup>Required</sup> <a name="AgentAccountAccessKey" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountAccessKey"></a>

```csharp
public string AgentAccountAccessKey { get; }
```

- *Type:* string

---

##### `AgentAccountName`<sup>Required</sup> <a name="AgentAccountName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentAccountName"></a>

```csharp
public string AgentAccountName { get; }
```

- *Type:* string

---

##### `AgentApplicationName`<sup>Required</sup> <a name="AgentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentApplicationName"></a>

```csharp
public string AgentApplicationName { get; }
```

- *Type:* string

---

##### `AgentNodeName`<sup>Required</sup> <a name="AgentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentNodeName"></a>

```csharp
public string AgentNodeName { get; }
```

- *Type:* string

---

##### `AgentTierName`<sup>Required</sup> <a name="AgentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentTierName"></a>

```csharp
public string AgentTierName { get; }
```

- *Type:* string

---

##### `AgentUniqueHostId`<sup>Required</sup> <a name="AgentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.agentUniqueHostId"></a>

```csharp
public string AgentUniqueHostId { get; }
```

- *Type:* string

---

##### `ControllerHostName`<sup>Required</sup> <a name="ControllerHostName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerHostName"></a>

```csharp
public string ControllerHostName { get; }
```

- *Type:* string

---

##### `ControllerPort`<sup>Required</sup> <a name="ControllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerPort"></a>

```csharp
public double ControllerPort { get; }
```

- *Type:* double

---

##### `ControllerSslEnabled`<sup>Required</sup> <a name="ControllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.controllerSslEnabled"></a>

```csharp
public object ControllerSslEnabled { get; }
```

- *Type:* object

---

##### `GloballyEnabled`<sup>Required</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoring.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgentAccountAccessKey,
    string AgentAccountName,
    string ControllerHostName,
    string Name,
    string SpringCloudServiceId,
    string AgentApplicationName = null,
    string AgentNodeName = null,
    string AgentTierName = null,
    string AgentUniqueHostId = null,
    double ControllerPort = null,
    object ControllerSslEnabled = null,
    object GloballyEnabled = null,
    string Id = null,
    SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountAccessKey">AgentAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountName">AgentAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerHostName">ControllerHostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentApplicationName">AgentApplicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentNodeName">AgentNodeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentTierName">AgentTierName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentUniqueHostId">AgentUniqueHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerPort">ControllerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerSslEnabled">ControllerSslEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.globallyEnabled">GloballyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgentAccountAccessKey`<sup>Required</sup> <a name="AgentAccountAccessKey" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountAccessKey"></a>

```csharp
public string AgentAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_access_key SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_access_key}.

---

##### `AgentAccountName`<sup>Required</sup> <a name="AgentAccountName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentAccountName"></a>

```csharp
public string AgentAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_account_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_account_name}.

---

##### `ControllerHostName`<sup>Required</sup> <a name="ControllerHostName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerHostName"></a>

```csharp
public string ControllerHostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_host_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#name SpringCloudAppDynamicsApplicationPerformanceMonitoring#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#spring_cloud_service_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `AgentApplicationName`<sup>Optional</sup> <a name="AgentApplicationName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentApplicationName"></a>

```csharp
public string AgentApplicationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_application_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_application_name}.

---

##### `AgentNodeName`<sup>Optional</sup> <a name="AgentNodeName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentNodeName"></a>

```csharp
public string AgentNodeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_node_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_node_name}.

---

##### `AgentTierName`<sup>Optional</sup> <a name="AgentTierName" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentTierName"></a>

```csharp
public string AgentTierName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_tier_name SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_tier_name}.

---

##### `AgentUniqueHostId`<sup>Optional</sup> <a name="AgentUniqueHostId" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.agentUniqueHostId"></a>

```csharp
public string AgentUniqueHostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#agent_unique_host_id SpringCloudAppDynamicsApplicationPerformanceMonitoring#agent_unique_host_id}.

---

##### `ControllerPort`<sup>Optional</sup> <a name="ControllerPort" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerPort"></a>

```csharp
public double ControllerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_port SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_port}.

---

##### `ControllerSslEnabled`<sup>Optional</sup> <a name="ControllerSslEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.controllerSslEnabled"></a>

```csharp
public object ControllerSslEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#controller_ssl_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#controller_ssl_enabled}.

---

##### `GloballyEnabled`<sup>Optional</sup> <a name="GloballyEnabled" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```csharp
public object GloballyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#globally_enabled SpringCloudAppDynamicsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#id SpringCloudAppDynamicsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```csharp
public SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts">SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#timeouts SpringCloudAppDynamicsApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#create SpringCloudAppDynamicsApplicationPerformanceMonitoring#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#delete SpringCloudAppDynamicsApplicationPerformanceMonitoring#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#read SpringCloudAppDynamicsApplicationPerformanceMonitoring#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/spring_cloud_app_dynamics_application_performance_monitoring#update SpringCloudAppDynamicsApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudAppDynamicsApplicationPerformanceMonitoring.SpringCloudAppDynamicsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



