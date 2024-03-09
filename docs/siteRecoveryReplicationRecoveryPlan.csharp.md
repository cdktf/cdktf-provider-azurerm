# `siteRecoveryReplicationRecoveryPlan` Submodule <a name="`siteRecoveryReplicationRecoveryPlan` Submodule" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryReplicationRecoveryPlan <a name="SiteRecoveryReplicationRecoveryPlan" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlan(Construct Scope, string Id, SiteRecoveryReplicationRecoveryPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig">SiteRecoveryReplicationRecoveryPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig">SiteRecoveryReplicationRecoveryPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings">PutAzureToAzureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putBootRecoveryGroup">PutBootRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putFailoverRecoveryGroup">PutFailoverRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup">PutRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putShutdownRecoveryGroup">PutShutdownRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetAzureToAzureSettings">ResetAzureToAzureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetBootRecoveryGroup">ResetBootRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetFailoverRecoveryGroup">ResetFailoverRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetRecoveryGroup">ResetRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetShutdownRecoveryGroup">ResetShutdownRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAzureToAzureSettings` <a name="PutAzureToAzureSettings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings"></a>

```csharp
private void PutAzureToAzureSettings(SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putAzureToAzureSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

---

##### `PutBootRecoveryGroup` <a name="PutBootRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putBootRecoveryGroup"></a>

```csharp
private void PutBootRecoveryGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putBootRecoveryGroup.parameter.value"></a>

- *Type:* object

---

##### `PutFailoverRecoveryGroup` <a name="PutFailoverRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putFailoverRecoveryGroup"></a>

```csharp
private void PutFailoverRecoveryGroup(SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putFailoverRecoveryGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a>

---

##### `PutRecoveryGroup` <a name="PutRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup"></a>

```csharp
private void PutRecoveryGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putRecoveryGroup.parameter.value"></a>

- *Type:* object

---

##### `PutShutdownRecoveryGroup` <a name="PutShutdownRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putShutdownRecoveryGroup"></a>

```csharp
private void PutShutdownRecoveryGroup(SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putShutdownRecoveryGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts"></a>

```csharp
private void PutTimeouts(SiteRecoveryReplicationRecoveryPlanTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

---

##### `ResetAzureToAzureSettings` <a name="ResetAzureToAzureSettings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetAzureToAzureSettings"></a>

```csharp
private void ResetAzureToAzureSettings()
```

##### `ResetBootRecoveryGroup` <a name="ResetBootRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetBootRecoveryGroup"></a>

```csharp
private void ResetBootRecoveryGroup()
```

##### `ResetFailoverRecoveryGroup` <a name="ResetFailoverRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetFailoverRecoveryGroup"></a>

```csharp
private void ResetFailoverRecoveryGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRecoveryGroup` <a name="ResetRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetRecoveryGroup"></a>

```csharp
private void ResetRecoveryGroup()
```

##### `ResetShutdownRecoveryGroup` <a name="ResetShutdownRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetShutdownRecoveryGroup"></a>

```csharp
private void ResetShutdownRecoveryGroup()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryReplicationRecoveryPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicationRecoveryPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicationRecoveryPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicationRecoveryPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryReplicationRecoveryPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SiteRecoveryReplicationRecoveryPlan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteRecoveryReplicationRecoveryPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteRecoveryReplicationRecoveryPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryReplicationRecoveryPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettings">AzureToAzureSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.bootRecoveryGroup">BootRecoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.failoverRecoveryGroup">FailoverRecoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroup">RecoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.shutdownRecoveryGroup">ShutdownRecoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettingsInput">AzureToAzureSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.bootRecoveryGroupInput">BootRecoveryGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.failoverRecoveryGroupInput">FailoverRecoveryGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroupInput">RecoveryGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput">RecoveryVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.shutdownRecoveryGroupInput">ShutdownRecoveryGroupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricIdInput">SourceRecoveryFabricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricIdInput">TargetRecoveryFabricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId">SourceRecoveryFabricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId">TargetRecoveryFabricId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AzureToAzureSettings`<sup>Required</sup> <a name="AzureToAzureSettings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettings"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference AzureToAzureSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference</a>

---

##### `BootRecoveryGroup`<sup>Required</sup> <a name="BootRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.bootRecoveryGroup"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList BootRecoveryGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList</a>

---

##### `FailoverRecoveryGroup`<sup>Required</sup> <a name="FailoverRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.failoverRecoveryGroup"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference FailoverRecoveryGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference</a>

---

##### `RecoveryGroup`<sup>Required</sup> <a name="RecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroup"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupList RecoveryGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupList</a>

---

##### `ShutdownRecoveryGroup`<sup>Required</sup> <a name="ShutdownRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.shutdownRecoveryGroup"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference ShutdownRecoveryGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeouts"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference">SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference</a>

---

##### `AzureToAzureSettingsInput`<sup>Optional</sup> <a name="AzureToAzureSettingsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.azureToAzureSettingsInput"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings AzureToAzureSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

---

##### `BootRecoveryGroupInput`<sup>Optional</sup> <a name="BootRecoveryGroupInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.bootRecoveryGroupInput"></a>

```csharp
public object BootRecoveryGroupInput { get; }
```

- *Type:* object

---

##### `FailoverRecoveryGroupInput`<sup>Optional</sup> <a name="FailoverRecoveryGroupInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.failoverRecoveryGroupInput"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup FailoverRecoveryGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecoveryGroupInput`<sup>Optional</sup> <a name="RecoveryGroupInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryGroupInput"></a>

```csharp
public object RecoveryGroupInput { get; }
```

- *Type:* object

---

##### `RecoveryVaultIdInput`<sup>Optional</sup> <a name="RecoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultIdInput"></a>

```csharp
public string RecoveryVaultIdInput { get; }
```

- *Type:* string

---

##### `ShutdownRecoveryGroupInput`<sup>Optional</sup> <a name="ShutdownRecoveryGroupInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.shutdownRecoveryGroupInput"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup ShutdownRecoveryGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a>

---

##### `SourceRecoveryFabricIdInput`<sup>Optional</sup> <a name="SourceRecoveryFabricIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricIdInput"></a>

```csharp
public string SourceRecoveryFabricIdInput { get; }
```

- *Type:* string

---

##### `TargetRecoveryFabricIdInput`<sup>Optional</sup> <a name="TargetRecoveryFabricIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricIdInput"></a>

```csharp
public string TargetRecoveryFabricIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.recoveryVaultId"></a>

```csharp
public string RecoveryVaultId { get; }
```

- *Type:* string

---

##### `SourceRecoveryFabricId`<sup>Required</sup> <a name="SourceRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.sourceRecoveryFabricId"></a>

```csharp
public string SourceRecoveryFabricId { get; }
```

- *Type:* string

---

##### `TargetRecoveryFabricId`<sup>Required</sup> <a name="TargetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.targetRecoveryFabricId"></a>

```csharp
public string TargetRecoveryFabricId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings <a name="SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings {
    string PrimaryEdgeZone = null,
    string PrimaryZone = null,
    string RecoveryEdgeZone = null,
    string RecoveryZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryEdgeZone">PrimaryEdgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#primary_edge_zone SiteRecoveryReplicationRecoveryPlan#primary_edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryZone">PrimaryZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#primary_zone SiteRecoveryReplicationRecoveryPlan#primary_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryEdgeZone">RecoveryEdgeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_edge_zone SiteRecoveryReplicationRecoveryPlan#recovery_edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryZone">RecoveryZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_zone SiteRecoveryReplicationRecoveryPlan#recovery_zone}. |

---

##### `PrimaryEdgeZone`<sup>Optional</sup> <a name="PrimaryEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryEdgeZone"></a>

```csharp
public string PrimaryEdgeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#primary_edge_zone SiteRecoveryReplicationRecoveryPlan#primary_edge_zone}.

---

##### `PrimaryZone`<sup>Optional</sup> <a name="PrimaryZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.primaryZone"></a>

```csharp
public string PrimaryZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#primary_zone SiteRecoveryReplicationRecoveryPlan#primary_zone}.

---

##### `RecoveryEdgeZone`<sup>Optional</sup> <a name="RecoveryEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryEdgeZone"></a>

```csharp
public string RecoveryEdgeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_edge_zone SiteRecoveryReplicationRecoveryPlan#recovery_edge_zone}.

---

##### `RecoveryZone`<sup>Optional</sup> <a name="RecoveryZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings.property.recoveryZone"></a>

```csharp
public string RecoveryZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_zone SiteRecoveryReplicationRecoveryPlan#recovery_zone}.

---

### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup {
    object PostAction = null,
    object PreAction = null,
    string[] ReplicatedProtectedItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.property.postAction">PostAction</a></code> | <code>object</code> | post_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.property.preAction">PreAction</a></code> | <code>object</code> | pre_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.property.replicatedProtectedItems">ReplicatedProtectedItems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}. |

---

##### `PostAction`<sup>Optional</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.property.postAction"></a>

```csharp
public object PostAction { get; set; }
```

- *Type:* object

post_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}

---

##### `PreAction`<sup>Optional</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.property.preAction"></a>

```csharp
public object PreAction { get; set; }
```

- *Type:* object

pre_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}

---

##### `ReplicatedProtectedItems`<sup>Optional</sup> <a name="ReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup.property.replicatedProtectedItems"></a>

```csharp
public string[] ReplicatedProtectedItems { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}.

---

### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanConfig <a name="SiteRecoveryReplicationRecoveryPlanConfig" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RecoveryVaultId,
    string SourceRecoveryFabricId,
    string TargetRecoveryFabricId,
    SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings AzureToAzureSettings = null,
    object BootRecoveryGroup = null,
    SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup FailoverRecoveryGroup = null,
    string Id = null,
    object RecoveryGroup = null,
    SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup ShutdownRecoveryGroup = null,
    SiteRecoveryReplicationRecoveryPlanTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId">RecoveryVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.sourceRecoveryFabricId">SourceRecoveryFabricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.targetRecoveryFabricId">TargetRecoveryFabricId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.azureToAzureSettings">AzureToAzureSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | azure_to_azure_settings block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.bootRecoveryGroup">BootRecoveryGroup</a></code> | <code>object</code> | boot_recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.failoverRecoveryGroup">FailoverRecoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a></code> | failover_recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryGroup">RecoveryGroup</a></code> | <code>object</code> | recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.shutdownRecoveryGroup">ShutdownRecoveryGroup</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a></code> | shutdown_recovery_group block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `RecoveryVaultId`<sup>Required</sup> <a name="RecoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryVaultId"></a>

```csharp
public string RecoveryVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}.

---

##### `SourceRecoveryFabricId`<sup>Required</sup> <a name="SourceRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.sourceRecoveryFabricId"></a>

```csharp
public string SourceRecoveryFabricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}.

---

##### `TargetRecoveryFabricId`<sup>Required</sup> <a name="TargetRecoveryFabricId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.targetRecoveryFabricId"></a>

```csharp
public string TargetRecoveryFabricId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}.

---

##### `AzureToAzureSettings`<sup>Optional</sup> <a name="AzureToAzureSettings" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.azureToAzureSettings"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings AzureToAzureSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

azure_to_azure_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#azure_to_azure_settings SiteRecoveryReplicationRecoveryPlan#azure_to_azure_settings}

---

##### `BootRecoveryGroup`<sup>Optional</sup> <a name="BootRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.bootRecoveryGroup"></a>

```csharp
public object BootRecoveryGroup { get; set; }
```

- *Type:* object

boot_recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#boot_recovery_group SiteRecoveryReplicationRecoveryPlan#boot_recovery_group}

---

##### `FailoverRecoveryGroup`<sup>Optional</sup> <a name="FailoverRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.failoverRecoveryGroup"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup FailoverRecoveryGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a>

failover_recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#failover_recovery_group SiteRecoveryReplicationRecoveryPlan#failover_recovery_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RecoveryGroup`<sup>Optional</sup> <a name="RecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.recoveryGroup"></a>

```csharp
public object RecoveryGroup { get; set; }
```

- *Type:* object

recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#recovery_group SiteRecoveryReplicationRecoveryPlan#recovery_group}

---

##### `ShutdownRecoveryGroup`<sup>Optional</sup> <a name="ShutdownRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.shutdownRecoveryGroup"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup ShutdownRecoveryGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a>

shutdown_recovery_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#shutdown_recovery_group SiteRecoveryReplicationRecoveryPlan#shutdown_recovery_group}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanConfig.property.timeouts"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts">SiteRecoveryReplicationRecoveryPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}

---

### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup {
    object PostAction = null,
    object PreAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup.property.postAction">PostAction</a></code> | <code>object</code> | post_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup.property.preAction">PreAction</a></code> | <code>object</code> | pre_action block. |

---

##### `PostAction`<sup>Optional</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup.property.postAction"></a>

```csharp
public object PostAction { get; set; }
```

- *Type:* object

post_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}

---

##### `PreAction`<sup>Optional</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup.property.preAction"></a>

```csharp
public object PreAction { get; set; }
```

- *Type:* object

pre_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}

---

### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroup <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroup {
    string Type,
    object PostAction = null,
    object PreAction = null,
    string[] ReplicatedProtectedItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.postAction">PostAction</a></code> | <code>object</code> | post_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.preAction">PreAction</a></code> | <code>object</code> | pre_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.replicatedProtectedItems">ReplicatedProtectedItems</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `PostAction`<sup>Optional</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.postAction"></a>

```csharp
public object PostAction { get; set; }
```

- *Type:* object

post_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}

---

##### `PreAction`<sup>Optional</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.preAction"></a>

```csharp
public object PreAction { get; set; }
```

- *Type:* object

pre_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}

---

##### `ReplicatedProtectedItems`<sup>Optional</sup> <a name="ReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroup.property.replicatedProtectedItems"></a>

```csharp
public string[] ReplicatedProtectedItems { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup {
    object PostAction = null,
    object PreAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup.property.postAction">PostAction</a></code> | <code>object</code> | post_action block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup.property.preAction">PreAction</a></code> | <code>object</code> | pre_action block. |

---

##### `PostAction`<sup>Optional</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup.property.postAction"></a>

```csharp
public object PostAction { get; set; }
```

- *Type:* object

post_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}

---

##### `PreAction`<sup>Optional</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup.property.preAction"></a>

```csharp
public object PreAction { get; set; }
```

- *Type:* object

pre_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}

---

### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction {
    string[] FailOverDirections,
    string[] FailOverTypes,
    string Name,
    string Type,
    string FabricLocation = null,
    string ManualActionInstruction = null,
    string RunbookId = null,
    string ScriptPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.scriptPath">ScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}. |

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}.

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}.

---

##### `FabricLocation`<sup>Optional</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}.

---

##### `ManualActionInstruction`<sup>Optional</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}.

---

##### `RunbookId`<sup>Optional</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}.

---

##### `ScriptPath`<sup>Optional</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction.property.scriptPath"></a>

```csharp
public string ScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}.

---

### SiteRecoveryReplicationRecoveryPlanTimeouts <a name="SiteRecoveryReplicationRecoveryPlanTimeouts" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference <a name="SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryEdgeZone">ResetPrimaryEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryZone">ResetPrimaryZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryEdgeZone">ResetRecoveryEdgeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryZone">ResetRecoveryZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryEdgeZone` <a name="ResetPrimaryEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryEdgeZone"></a>

```csharp
private void ResetPrimaryEdgeZone()
```

##### `ResetPrimaryZone` <a name="ResetPrimaryZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetPrimaryZone"></a>

```csharp
private void ResetPrimaryZone()
```

##### `ResetRecoveryEdgeZone` <a name="ResetRecoveryEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryEdgeZone"></a>

```csharp
private void ResetRecoveryEdgeZone()
```

##### `ResetRecoveryZone` <a name="ResetRecoveryZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.resetRecoveryZone"></a>

```csharp
private void ResetRecoveryZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZoneInput">PrimaryEdgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZoneInput">PrimaryZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZoneInput">RecoveryEdgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZoneInput">RecoveryZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZone">PrimaryEdgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZone">PrimaryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZone">RecoveryEdgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZone">RecoveryZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimaryEdgeZoneInput`<sup>Optional</sup> <a name="PrimaryEdgeZoneInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZoneInput"></a>

```csharp
public string PrimaryEdgeZoneInput { get; }
```

- *Type:* string

---

##### `PrimaryZoneInput`<sup>Optional</sup> <a name="PrimaryZoneInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZoneInput"></a>

```csharp
public string PrimaryZoneInput { get; }
```

- *Type:* string

---

##### `RecoveryEdgeZoneInput`<sup>Optional</sup> <a name="RecoveryEdgeZoneInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZoneInput"></a>

```csharp
public string RecoveryEdgeZoneInput { get; }
```

- *Type:* string

---

##### `RecoveryZoneInput`<sup>Optional</sup> <a name="RecoveryZoneInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZoneInput"></a>

```csharp
public string RecoveryZoneInput { get; }
```

- *Type:* string

---

##### `PrimaryEdgeZone`<sup>Required</sup> <a name="PrimaryEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryEdgeZone"></a>

```csharp
public string PrimaryEdgeZone { get; }
```

- *Type:* string

---

##### `PrimaryZone`<sup>Required</sup> <a name="PrimaryZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.primaryZone"></a>

```csharp
public string PrimaryZone { get; }
```

- *Type:* string

---

##### `RecoveryEdgeZone`<sup>Required</sup> <a name="RecoveryEdgeZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryEdgeZone"></a>

```csharp
public string RecoveryEdgeZone { get; }
```

- *Type:* string

---

##### `RecoveryZone`<sup>Required</sup> <a name="RecoveryZone" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.recoveryZone"></a>

```csharp
public string RecoveryZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference.property.internalValue"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings">SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings</a>

---


### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.putPostAction">PutPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.putPreAction">PutPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resetPostAction">ResetPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resetPreAction">ResetPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resetReplicatedProtectedItems">ResetReplicatedProtectedItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostAction` <a name="PutPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.putPostAction"></a>

```csharp
private void PutPostAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.putPostAction.parameter.value"></a>

- *Type:* object

---

##### `PutPreAction` <a name="PutPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.putPreAction"></a>

```csharp
private void PutPreAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.putPreAction.parameter.value"></a>

- *Type:* object

---

##### `ResetPostAction` <a name="ResetPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resetPostAction"></a>

```csharp
private void ResetPostAction()
```

##### `ResetPreAction` <a name="ResetPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resetPreAction"></a>

```csharp
private void ResetPreAction()
```

##### `ResetReplicatedProtectedItems` <a name="ResetReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.resetReplicatedProtectedItems"></a>

```csharp
private void ResetReplicatedProtectedItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.postAction">PostAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.preAction">PreAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.postActionInput">PostActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.preActionInput">PreActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.replicatedProtectedItemsInput">ReplicatedProtectedItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.replicatedProtectedItems">ReplicatedProtectedItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostAction`<sup>Required</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.postAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList PostAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList</a>

---

##### `PreAction`<sup>Required</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.preAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList PreAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList</a>

---

##### `PostActionInput`<sup>Optional</sup> <a name="PostActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.postActionInput"></a>

```csharp
public object PostActionInput { get; }
```

- *Type:* object

---

##### `PreActionInput`<sup>Optional</sup> <a name="PreActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.preActionInput"></a>

```csharp
public object PreActionInput { get; }
```

- *Type:* object

---

##### `ReplicatedProtectedItemsInput`<sup>Optional</sup> <a name="ReplicatedProtectedItemsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.replicatedProtectedItemsInput"></a>

```csharp
public string[] ReplicatedProtectedItemsInput { get; }
```

- *Type:* string[]

---

##### `ReplicatedProtectedItems`<sup>Required</sup> <a name="ReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.replicatedProtectedItems"></a>

```csharp
public string[] ReplicatedProtectedItems { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.putPostAction">PutPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.putPreAction">PutPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resetPostAction">ResetPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resetPreAction">ResetPreAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostAction` <a name="PutPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.putPostAction"></a>

```csharp
private void PutPostAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.putPostAction.parameter.value"></a>

- *Type:* object

---

##### `PutPreAction` <a name="PutPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.putPreAction"></a>

```csharp
private void PutPreAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.putPreAction.parameter.value"></a>

- *Type:* object

---

##### `ResetPostAction` <a name="ResetPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resetPostAction"></a>

```csharp
private void ResetPostAction()
```

##### `ResetPreAction` <a name="ResetPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.resetPreAction"></a>

```csharp
private void ResetPreAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.postAction">PostAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.preAction">PreAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.postActionInput">PostActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.preActionInput">PreActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostAction`<sup>Required</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.postAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList PostAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList</a>

---

##### `PreAction`<sup>Required</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.preAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList PreAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList</a>

---

##### `PostActionInput`<sup>Optional</sup> <a name="PostActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.postActionInput"></a>

```csharp
public object PostActionInput { get; }
```

- *Type:* object

---

##### `PreActionInput`<sup>Optional</sup> <a name="PreActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.preActionInput"></a>

```csharp
public object PreActionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference.property.internalValue"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup">SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup</a>

---


### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction">PutPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction">PutPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPostAction">ResetPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPreAction">ResetPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetReplicatedProtectedItems">ResetReplicatedProtectedItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostAction` <a name="PutPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction"></a>

```csharp
private void PutPostAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPostAction.parameter.value"></a>

- *Type:* object

---

##### `PutPreAction` <a name="PutPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction"></a>

```csharp
private void PutPreAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.putPreAction.parameter.value"></a>

- *Type:* object

---

##### `ResetPostAction` <a name="ResetPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPostAction"></a>

```csharp
private void ResetPostAction()
```

##### `ResetPreAction` <a name="ResetPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetPreAction"></a>

```csharp
private void ResetPreAction()
```

##### `ResetReplicatedProtectedItems` <a name="ResetReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.resetReplicatedProtectedItems"></a>

```csharp
private void ResetReplicatedProtectedItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction">PostAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction">PreAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postActionInput">PostActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preActionInput">PreActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItemsInput">ReplicatedProtectedItemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems">ReplicatedProtectedItems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostAction`<sup>Required</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList PostAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList</a>

---

##### `PreAction`<sup>Required</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList PreAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList</a>

---

##### `PostActionInput`<sup>Optional</sup> <a name="PostActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.postActionInput"></a>

```csharp
public object PostActionInput { get; }
```

- *Type:* object

---

##### `PreActionInput`<sup>Optional</sup> <a name="PreActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.preActionInput"></a>

```csharp
public object PreActionInput { get; }
```

- *Type:* object

---

##### `ReplicatedProtectedItemsInput`<sup>Optional</sup> <a name="ReplicatedProtectedItemsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItemsInput"></a>

```csharp
public string[] ReplicatedProtectedItemsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ReplicatedProtectedItems`<sup>Required</sup> <a name="ReplicatedProtectedItems" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.replicatedProtectedItems"></a>

```csharp
public string[] ReplicatedProtectedItems { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.putPostAction">PutPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.putPreAction">PutPreAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resetPostAction">ResetPostAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resetPreAction">ResetPreAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostAction` <a name="PutPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.putPostAction"></a>

```csharp
private void PutPostAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.putPostAction.parameter.value"></a>

- *Type:* object

---

##### `PutPreAction` <a name="PutPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.putPreAction"></a>

```csharp
private void PutPreAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.putPreAction.parameter.value"></a>

- *Type:* object

---

##### `ResetPostAction` <a name="ResetPostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resetPostAction"></a>

```csharp
private void ResetPostAction()
```

##### `ResetPreAction` <a name="ResetPreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.resetPreAction"></a>

```csharp
private void ResetPreAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.postAction">PostAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.preAction">PreAction</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.postActionInput">PostActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.preActionInput">PreActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostAction`<sup>Required</sup> <a name="PostAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.postAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList PostAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList</a>

---

##### `PreAction`<sup>Required</sup> <a name="PreAction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.preAction"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList PreAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList</a>

---

##### `PostActionInput`<sup>Optional</sup> <a name="PostActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.postActionInput"></a>

```csharp
public object PostActionInput { get; }
```

- *Type:* object

---

##### `PreActionInput`<sup>Optional</sup> <a name="PreActionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.preActionInput"></a>

```csharp
public object PreActionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference.property.internalValue"></a>

```csharp
public SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup">SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup</a>

---


### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.get"></a>

```csharp
private SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference <a name="SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetFabricLocation">ResetFabricLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetManualActionInstruction">ResetManualActionInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetRunbookId">ResetRunbookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetScriptPath">ResetScriptPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFabricLocation` <a name="ResetFabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetFabricLocation"></a>

```csharp
private void ResetFabricLocation()
```

##### `ResetManualActionInstruction` <a name="ResetManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetManualActionInstruction"></a>

```csharp
private void ResetManualActionInstruction()
```

##### `ResetRunbookId` <a name="ResetRunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetRunbookId"></a>

```csharp
private void ResetRunbookId()
```

##### `ResetScriptPath` <a name="ResetScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.resetScriptPath"></a>

```csharp
private void ResetScriptPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.fabricLocationInput">FabricLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput">FailOverDirectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverTypesInput">FailOverTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput">ManualActionInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.scriptPathInput">ScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.fabricLocation">FabricLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverDirections">FailOverDirections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverTypes">FailOverTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.manualActionInstruction">ManualActionInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.scriptPath">ScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FabricLocationInput`<sup>Optional</sup> <a name="FabricLocationInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.fabricLocationInput"></a>

```csharp
public string FabricLocationInput { get; }
```

- *Type:* string

---

##### `FailOverDirectionsInput`<sup>Optional</sup> <a name="FailOverDirectionsInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverDirectionsInput"></a>

```csharp
public string[] FailOverDirectionsInput { get; }
```

- *Type:* string[]

---

##### `FailOverTypesInput`<sup>Optional</sup> <a name="FailOverTypesInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverTypesInput"></a>

```csharp
public string[] FailOverTypesInput { get; }
```

- *Type:* string[]

---

##### `ManualActionInstructionInput`<sup>Optional</sup> <a name="ManualActionInstructionInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.manualActionInstructionInput"></a>

```csharp
public string ManualActionInstructionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `ScriptPathInput`<sup>Optional</sup> <a name="ScriptPathInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.scriptPathInput"></a>

```csharp
public string ScriptPathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FabricLocation`<sup>Required</sup> <a name="FabricLocation" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.fabricLocation"></a>

```csharp
public string FabricLocation { get; }
```

- *Type:* string

---

##### `FailOverDirections`<sup>Required</sup> <a name="FailOverDirections" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverDirections"></a>

```csharp
public string[] FailOverDirections { get; }
```

- *Type:* string[]

---

##### `FailOverTypes`<sup>Required</sup> <a name="FailOverTypes" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.failOverTypes"></a>

```csharp
public string[] FailOverTypes { get; }
```

- *Type:* string[]

---

##### `ManualActionInstruction`<sup>Required</sup> <a name="ManualActionInstruction" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.manualActionInstruction"></a>

```csharp
public string ManualActionInstruction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `ScriptPath`<sup>Required</sup> <a name="ScriptPath" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.scriptPath"></a>

```csharp
public string ScriptPath { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference <a name="SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryReplicationRecoveryPlan.SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



