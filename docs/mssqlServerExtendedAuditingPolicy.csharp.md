# `mssqlServerExtendedAuditingPolicy` Submodule <a name="`mssqlServerExtendedAuditingPolicy` Submodule" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServerExtendedAuditingPolicy <a name="MssqlServerExtendedAuditingPolicy" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy azurerm_mssql_server_extended_auditing_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerExtendedAuditingPolicy(Construct Scope, string Id, MssqlServerExtendedAuditingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig">MssqlServerExtendedAuditingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig">MssqlServerExtendedAuditingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetAuditActionsAndGroups">ResetAuditActionsAndGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetLogMonitoringEnabled">ResetLogMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetPredicateExpression">ResetPredicateExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary">ResetStorageAccountAccessKeyIsSecondary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountSubscriptionId">ResetStorageAccountSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlServerExtendedAuditingPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

---

##### `ResetAuditActionsAndGroups` <a name="ResetAuditActionsAndGroups" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetAuditActionsAndGroups"></a>

```csharp
private void ResetAuditActionsAndGroups()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogMonitoringEnabled` <a name="ResetLogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetLogMonitoringEnabled"></a>

```csharp
private void ResetLogMonitoringEnabled()
```

##### `ResetPredicateExpression` <a name="ResetPredicateExpression" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetPredicateExpression"></a>

```csharp
private void ResetPredicateExpression()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKey"></a>

```csharp
private void ResetStorageAccountAccessKey()
```

##### `ResetStorageAccountAccessKeyIsSecondary` <a name="ResetStorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountAccessKeyIsSecondary"></a>

```csharp
private void ResetStorageAccountAccessKeyIsSecondary()
```

##### `ResetStorageAccountSubscriptionId` <a name="ResetStorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageAccountSubscriptionId"></a>

```csharp
private void ResetStorageAccountSubscriptionId()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetStorageEndpoint"></a>

```csharp
private void ResetStorageEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MssqlServerExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerExtendedAuditingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerExtendedAuditingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerExtendedAuditingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MssqlServerExtendedAuditingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MssqlServerExtendedAuditingPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlServerExtendedAuditingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlServerExtendedAuditingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServerExtendedAuditingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference">MssqlServerExtendedAuditingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroupsInput">AuditActionsAndGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabledInput">LogMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpressionInput">PredicateExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput">StorageAccountAccessKeyIsSecondaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionIdInput">StorageAccountSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroups">AuditActionsAndGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpression">PredicateExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary">StorageAccountAccessKeyIsSecondary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeouts"></a>

```csharp
public MssqlServerExtendedAuditingPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference">MssqlServerExtendedAuditingPolicyTimeoutsOutputReference</a>

---

##### `AuditActionsAndGroupsInput`<sup>Optional</sup> <a name="AuditActionsAndGroupsInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroupsInput"></a>

```csharp
public string[] AuditActionsAndGroupsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogMonitoringEnabledInput`<sup>Optional</sup> <a name="LogMonitoringEnabledInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabledInput"></a>

```csharp
public object LogMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `PredicateExpressionInput`<sup>Optional</sup> <a name="PredicateExpressionInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpressionInput"></a>

```csharp
public string PredicateExpressionInput { get; }
```

- *Type:* string

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKeyIsSecondaryInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyIsSecondaryInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondaryInput"></a>

```csharp
public object StorageAccountAccessKeyIsSecondaryInput { get; }
```

- *Type:* object

---

##### `StorageAccountSubscriptionIdInput`<sup>Optional</sup> <a name="StorageAccountSubscriptionIdInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionIdInput"></a>

```csharp
public string StorageAccountSubscriptionIdInput { get; }
```

- *Type:* string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpointInput"></a>

```csharp
public string StorageEndpointInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuditActionsAndGroups`<sup>Required</sup> <a name="AuditActionsAndGroups" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.auditActionsAndGroups"></a>

```csharp
public string[] AuditActionsAndGroups { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogMonitoringEnabled`<sup>Required</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.logMonitoringEnabled"></a>

```csharp
public object LogMonitoringEnabled { get; }
```

- *Type:* object

---

##### `PredicateExpression`<sup>Required</sup> <a name="PredicateExpression" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.predicateExpression"></a>

```csharp
public string PredicateExpression { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKeyIsSecondary`<sup>Required</sup> <a name="StorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountAccessKeyIsSecondary"></a>

```csharp
public object StorageAccountAccessKeyIsSecondary { get; }
```

- *Type:* object

---

##### `StorageAccountSubscriptionId`<sup>Required</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageAccountSubscriptionId"></a>

```csharp
public string StorageAccountSubscriptionId { get; }
```

- *Type:* string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerExtendedAuditingPolicyConfig <a name="MssqlServerExtendedAuditingPolicyConfig" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerExtendedAuditingPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServerId,
    string[] AuditActionsAndGroups = null,
    object Enabled = null,
    string Id = null,
    object LogMonitoringEnabled = null,
    string PredicateExpression = null,
    double RetentionInDays = null,
    string StorageAccountAccessKey = null,
    object StorageAccountAccessKeyIsSecondary = null,
    string StorageAccountSubscriptionId = null,
    string StorageEndpoint = null,
    MssqlServerExtendedAuditingPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.auditActionsAndGroups">AuditActionsAndGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#audit_actions_and_groups MssqlServerExtendedAuditingPolicy#audit_actions_and_groups}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.logMonitoringEnabled">LogMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.predicateExpression">PredicateExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#predicate_expression MssqlServerExtendedAuditingPolicy#predicate_expression}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary">StorageAccountAccessKeyIsSecondary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountSubscriptionId">StorageAccountSubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#server_id MssqlServerExtendedAuditingPolicy#server_id}.

---

##### `AuditActionsAndGroups`<sup>Optional</sup> <a name="AuditActionsAndGroups" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.auditActionsAndGroups"></a>

```csharp
public string[] AuditActionsAndGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#audit_actions_and_groups MssqlServerExtendedAuditingPolicy#audit_actions_and_groups}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#enabled MssqlServerExtendedAuditingPolicy#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#id MssqlServerExtendedAuditingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogMonitoringEnabled`<sup>Optional</sup> <a name="LogMonitoringEnabled" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.logMonitoringEnabled"></a>

```csharp
public object LogMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#log_monitoring_enabled MssqlServerExtendedAuditingPolicy#log_monitoring_enabled}.

---

##### `PredicateExpression`<sup>Optional</sup> <a name="PredicateExpression" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.predicateExpression"></a>

```csharp
public string PredicateExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#predicate_expression MssqlServerExtendedAuditingPolicy#predicate_expression}.

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#retention_in_days MssqlServerExtendedAuditingPolicy#retention_in_days}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key MssqlServerExtendedAuditingPolicy#storage_account_access_key}.

---

##### `StorageAccountAccessKeyIsSecondary`<sup>Optional</sup> <a name="StorageAccountAccessKeyIsSecondary" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountAccessKeyIsSecondary"></a>

```csharp
public object StorageAccountAccessKeyIsSecondary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_account_access_key_is_secondary MssqlServerExtendedAuditingPolicy#storage_account_access_key_is_secondary}.

---

##### `StorageAccountSubscriptionId`<sup>Optional</sup> <a name="StorageAccountSubscriptionId" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageAccountSubscriptionId"></a>

```csharp
public string StorageAccountSubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_account_subscription_id MssqlServerExtendedAuditingPolicy#storage_account_subscription_id}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#storage_endpoint MssqlServerExtendedAuditingPolicy#storage_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyConfig.property.timeouts"></a>

```csharp
public MssqlServerExtendedAuditingPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts">MssqlServerExtendedAuditingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#timeouts MssqlServerExtendedAuditingPolicy#timeouts}

---

### MssqlServerExtendedAuditingPolicyTimeouts <a name="MssqlServerExtendedAuditingPolicyTimeouts" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerExtendedAuditingPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#create MssqlServerExtendedAuditingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#delete MssqlServerExtendedAuditingPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#read MssqlServerExtendedAuditingPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/mssql_server_extended_auditing_policy#update MssqlServerExtendedAuditingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerExtendedAuditingPolicyTimeoutsOutputReference <a name="MssqlServerExtendedAuditingPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MssqlServerExtendedAuditingPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mssqlServerExtendedAuditingPolicy.MssqlServerExtendedAuditingPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



