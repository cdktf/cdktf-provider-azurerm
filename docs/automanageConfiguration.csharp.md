# `automanageConfiguration` Submodule <a name="`automanageConfiguration` Submodule" id="@cdktf/provider-azurerm.automanageConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomanageConfiguration <a name="AutomanageConfiguration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration azurerm_automanage_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfiguration(Construct Scope, string Id, AutomanageConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig">AutomanageConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig">AutomanageConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware">PutAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline">PutAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware">ResetAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled">ResetAutomationAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline">ResetAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup">ResetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled">ResetBootDiagnosticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled">ResetDefenderForCloudEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled">ResetGuestConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled">ResetLogAnalyticsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled">ResetStatusChangeAlertEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntimalware` <a name="PutAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware"></a>

```csharp
private void PutAntimalware(AutomanageConfigurationAntimalware Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAntimalware.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `PutAzureSecurityBaseline` <a name="PutAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline"></a>

```csharp
private void PutAzureSecurityBaseline(AutomanageConfigurationAzureSecurityBaseline Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putAzureSecurityBaseline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup"></a>

```csharp
private void PutBackup(AutomanageConfigurationBackup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(AutomanageConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

---

##### `ResetAntimalware` <a name="ResetAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAntimalware"></a>

```csharp
private void ResetAntimalware()
```

##### `ResetAutomationAccountEnabled` <a name="ResetAutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAutomationAccountEnabled"></a>

```csharp
private void ResetAutomationAccountEnabled()
```

##### `ResetAzureSecurityBaseline` <a name="ResetAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetAzureSecurityBaseline"></a>

```csharp
private void ResetAzureSecurityBaseline()
```

##### `ResetBackup` <a name="ResetBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBackup"></a>

```csharp
private void ResetBackup()
```

##### `ResetBootDiagnosticsEnabled` <a name="ResetBootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetBootDiagnosticsEnabled"></a>

```csharp
private void ResetBootDiagnosticsEnabled()
```

##### `ResetDefenderForCloudEnabled` <a name="ResetDefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetDefenderForCloudEnabled"></a>

```csharp
private void ResetDefenderForCloudEnabled()
```

##### `ResetGuestConfigurationEnabled` <a name="ResetGuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetGuestConfigurationEnabled"></a>

```csharp
private void ResetGuestConfigurationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogAnalyticsEnabled` <a name="ResetLogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetLogAnalyticsEnabled"></a>

```csharp
private void ResetLogAnalyticsEnabled()
```

##### `ResetStatusChangeAlertEnabled` <a name="ResetStatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetStatusChangeAlertEnabled"></a>

```csharp
private void ResetStatusChangeAlertEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomanageConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomanageConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomanageConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomanageConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomanageConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutomanageConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomanageConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomanageConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutomanageConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware">Antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline">AzureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput">AntimalwareInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput">AutomationAccountEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput">AzureSecurityBaselineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput">BootDiagnosticsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput">DefenderForCloudEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput">GuestConfigurationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput">LogAnalyticsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput">StatusChangeAlertEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled">AutomationAccountEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled">BootDiagnosticsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled">DefenderForCloudEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled">GuestConfigurationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled">LogAnalyticsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled">StatusChangeAlertEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Antimalware`<sup>Required</sup> <a name="Antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalware"></a>

```csharp
public AutomanageConfigurationAntimalwareOutputReference Antimalware { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference">AutomanageConfigurationAntimalwareOutputReference</a>

---

##### `AzureSecurityBaseline`<sup>Required</sup> <a name="AzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaseline"></a>

```csharp
public AutomanageConfigurationAzureSecurityBaselineOutputReference AzureSecurityBaseline { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference">AutomanageConfigurationAzureSecurityBaselineOutputReference</a>

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backup"></a>

```csharp
public AutomanageConfigurationBackupOutputReference Backup { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference">AutomanageConfigurationBackupOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeouts"></a>

```csharp
public AutomanageConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference">AutomanageConfigurationTimeoutsOutputReference</a>

---

##### `AntimalwareInput`<sup>Optional</sup> <a name="AntimalwareInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.antimalwareInput"></a>

```csharp
public AutomanageConfigurationAntimalware AntimalwareInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---

##### `AutomationAccountEnabledInput`<sup>Optional</sup> <a name="AutomationAccountEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabledInput"></a>

```csharp
public object AutomationAccountEnabledInput { get; }
```

- *Type:* object

---

##### `AzureSecurityBaselineInput`<sup>Optional</sup> <a name="AzureSecurityBaselineInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.azureSecurityBaselineInput"></a>

```csharp
public AutomanageConfigurationAzureSecurityBaseline AzureSecurityBaselineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.backupInput"></a>

```csharp
public AutomanageConfigurationBackup BackupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---

##### `BootDiagnosticsEnabledInput`<sup>Optional</sup> <a name="BootDiagnosticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabledInput"></a>

```csharp
public object BootDiagnosticsEnabledInput { get; }
```

- *Type:* object

---

##### `DefenderForCloudEnabledInput`<sup>Optional</sup> <a name="DefenderForCloudEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabledInput"></a>

```csharp
public object DefenderForCloudEnabledInput { get; }
```

- *Type:* object

---

##### `GuestConfigurationEnabledInput`<sup>Optional</sup> <a name="GuestConfigurationEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabledInput"></a>

```csharp
public object GuestConfigurationEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogAnalyticsEnabledInput`<sup>Optional</sup> <a name="LogAnalyticsEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabledInput"></a>

```csharp
public object LogAnalyticsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StatusChangeAlertEnabledInput`<sup>Optional</sup> <a name="StatusChangeAlertEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabledInput"></a>

```csharp
public object StatusChangeAlertEnabledInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutomationAccountEnabled`<sup>Required</sup> <a name="AutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.automationAccountEnabled"></a>

```csharp
public object AutomationAccountEnabled { get; }
```

- *Type:* object

---

##### `BootDiagnosticsEnabled`<sup>Required</sup> <a name="BootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.bootDiagnosticsEnabled"></a>

```csharp
public object BootDiagnosticsEnabled { get; }
```

- *Type:* object

---

##### `DefenderForCloudEnabled`<sup>Required</sup> <a name="DefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.defenderForCloudEnabled"></a>

```csharp
public object DefenderForCloudEnabled { get; }
```

- *Type:* object

---

##### `GuestConfigurationEnabled`<sup>Required</sup> <a name="GuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.guestConfigurationEnabled"></a>

```csharp
public object GuestConfigurationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LogAnalyticsEnabled`<sup>Required</sup> <a name="LogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.logAnalyticsEnabled"></a>

```csharp
public object LogAnalyticsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StatusChangeAlertEnabled`<sup>Required</sup> <a name="StatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.statusChangeAlertEnabled"></a>

```csharp
public object StatusChangeAlertEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomanageConfigurationAntimalware <a name="AutomanageConfigurationAntimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationAntimalware {
    AutomanageConfigurationAntimalwareExclusions Exclusions = null,
    object RealTimeProtectionEnabled = null,
    double ScheduledScanDay = null,
    object ScheduledScanEnabled = null,
    double ScheduledScanTimeInMinutes = null,
    string ScheduledScanType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | exclusions block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled">RealTimeProtectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay">ScheduledScanDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled">ScheduledScanEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes">ScheduledScanTimeInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType">ScheduledScanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}. |

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.exclusions"></a>

```csharp
public AutomanageConfigurationAntimalwareExclusions Exclusions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#exclusions AutomanageConfiguration#exclusions}

---

##### `RealTimeProtectionEnabled`<sup>Optional</sup> <a name="RealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.realTimeProtectionEnabled"></a>

```csharp
public object RealTimeProtectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}.

---

##### `ScheduledScanDay`<sup>Optional</sup> <a name="ScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanDay"></a>

```csharp
public double ScheduledScanDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}.

---

##### `ScheduledScanEnabled`<sup>Optional</sup> <a name="ScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanEnabled"></a>

```csharp
public object ScheduledScanEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}.

---

##### `ScheduledScanTimeInMinutes`<sup>Optional</sup> <a name="ScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanTimeInMinutes"></a>

```csharp
public double ScheduledScanTimeInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}.

---

##### `ScheduledScanType`<sup>Optional</sup> <a name="ScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware.property.scheduledScanType"></a>

```csharp
public string ScheduledScanType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}.

---

### AutomanageConfigurationAntimalwareExclusions <a name="AutomanageConfigurationAntimalwareExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationAntimalwareExclusions {
    string Extensions = null,
    string Paths = null,
    string Processes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions">Extensions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths">Paths</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes">Processes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}. |

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.extensions"></a>

```csharp
public string Extensions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}.

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.paths"></a>

```csharp
public string Paths { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}.

---

##### `Processes`<sup>Optional</sup> <a name="Processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions.property.processes"></a>

```csharp
public string Processes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}.

---

### AutomanageConfigurationAzureSecurityBaseline <a name="AutomanageConfigurationAzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationAzureSecurityBaseline {
    string AssignmentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType">AssignmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}. |

---

##### `AssignmentType`<sup>Optional</sup> <a name="AssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline.property.assignmentType"></a>

```csharp
public string AssignmentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}.

---

### AutomanageConfigurationBackup <a name="AutomanageConfigurationBackup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackup {
    double InstantRpRetentionRangeInDays = null,
    string PolicyName = null,
    AutomanageConfigurationBackupRetentionPolicy RetentionPolicy = null,
    AutomanageConfigurationBackupSchedulePolicy SchedulePolicy = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays">InstantRpRetentionRangeInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy">SchedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | schedule_policy block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}. |

---

##### `InstantRpRetentionRangeInDays`<sup>Optional</sup> <a name="InstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.instantRpRetentionRangeInDays"></a>

```csharp
public double InstantRpRetentionRangeInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}.

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.retentionPolicy"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicy RetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_policy AutomanageConfiguration#retention_policy}

---

##### `SchedulePolicy`<sup>Optional</sup> <a name="SchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.schedulePolicy"></a>

```csharp
public AutomanageConfigurationBackupSchedulePolicy SchedulePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_policy AutomanageConfiguration#schedule_policy}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}.

---

### AutomanageConfigurationBackupRetentionPolicy <a name="AutomanageConfigurationBackupRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicy {
    AutomanageConfigurationBackupRetentionPolicyDailySchedule DailySchedule = null,
    string RetentionPolicyType = null,
    AutomanageConfigurationBackupRetentionPolicyWeeklySchedule WeeklySchedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType">RetentionPolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.dailySchedule"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailySchedule DailySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#daily_schedule AutomanageConfiguration#daily_schedule}

---

##### `RetentionPolicyType`<sup>Optional</sup> <a name="RetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.retentionPolicyType"></a>

```csharp
public string RetentionPolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}.

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy.property.weeklySchedule"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklySchedule WeeklySchedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#weekly_schedule AutomanageConfiguration#weekly_schedule}

---

### AutomanageConfigurationBackupRetentionPolicyDailySchedule <a name="AutomanageConfigurationBackupRetentionPolicyDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyDailySchedule {
    AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration RetentionDuration = null,
    string[] RetentionTimes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes">RetentionTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `RetentionDuration`<sup>Optional</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionDuration"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration RetentionDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `RetentionTimes`<sup>Optional</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule.property.retentionTimes"></a>

```csharp
public string[] RetentionTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration {
    double Count = null,
    string DurationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType">DurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `DurationType`<sup>Optional</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration.property.durationType"></a>

```csharp
public string DurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklySchedule <a name="AutomanageConfigurationBackupRetentionPolicyWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyWeeklySchedule {
    AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration RetentionDuration = null,
    string[] RetentionTimes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | retention_duration block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes">RetentionTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}. |

---

##### `RetentionDuration`<sup>Optional</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionDuration"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration RetentionDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

retention_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}

---

##### `RetentionTimes`<sup>Optional</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule.property.retentionTimes"></a>

```csharp
public string[] RetentionTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}.

---

### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration {
    double Count = null,
    string DurationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count">Count</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType">DurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}.

---

##### `DurationType`<sup>Optional</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration.property.durationType"></a>

```csharp
public string DurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}.

---

### AutomanageConfigurationBackupSchedulePolicy <a name="AutomanageConfigurationBackupSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupSchedulePolicy {
    string SchedulePolicyType = null,
    string[] ScheduleRunDays = null,
    string ScheduleRunFrequency = null,
    string[] ScheduleRunTimes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType">SchedulePolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays">ScheduleRunDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency">ScheduleRunFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes">ScheduleRunTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}. |

---

##### `SchedulePolicyType`<sup>Optional</sup> <a name="SchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.schedulePolicyType"></a>

```csharp
public string SchedulePolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}.

---

##### `ScheduleRunDays`<sup>Optional</sup> <a name="ScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunDays"></a>

```csharp
public string[] ScheduleRunDays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}.

---

##### `ScheduleRunFrequency`<sup>Optional</sup> <a name="ScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunFrequency"></a>

```csharp
public string ScheduleRunFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}.

---

##### `ScheduleRunTimes`<sup>Optional</sup> <a name="ScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy.property.scheduleRunTimes"></a>

```csharp
public string[] ScheduleRunTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}.

---

### AutomanageConfigurationConfig <a name="AutomanageConfigurationConfig" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    AutomanageConfigurationAntimalware Antimalware = null,
    object AutomationAccountEnabled = null,
    AutomanageConfigurationAzureSecurityBaseline AzureSecurityBaseline = null,
    AutomanageConfigurationBackup Backup = null,
    object BootDiagnosticsEnabled = null,
    object DefenderForCloudEnabled = null,
    object GuestConfigurationEnabled = null,
    string Id = null,
    object LogAnalyticsEnabled = null,
    object StatusChangeAlertEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    AutomanageConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware">Antimalware</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | antimalware block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled">AutomationAccountEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline">AzureSecurityBaseline</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | azure_security_baseline block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled">BootDiagnosticsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled">DefenderForCloudEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled">GuestConfigurationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled">LogAnalyticsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled">StatusChangeAlertEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}.

---

##### `Antimalware`<sup>Optional</sup> <a name="Antimalware" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.antimalware"></a>

```csharp
public AutomanageConfigurationAntimalware Antimalware { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

antimalware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}

---

##### `AutomationAccountEnabled`<sup>Optional</sup> <a name="AutomationAccountEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.automationAccountEnabled"></a>

```csharp
public object AutomationAccountEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}.

---

##### `AzureSecurityBaseline`<sup>Optional</sup> <a name="AzureSecurityBaseline" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.azureSecurityBaseline"></a>

```csharp
public AutomanageConfigurationAzureSecurityBaseline AzureSecurityBaseline { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

azure_security_baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#azure_security_baseline AutomanageConfiguration#azure_security_baseline}

---

##### `Backup`<sup>Optional</sup> <a name="Backup" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.backup"></a>

```csharp
public AutomanageConfigurationBackup Backup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#backup AutomanageConfiguration#backup}

---

##### `BootDiagnosticsEnabled`<sup>Optional</sup> <a name="BootDiagnosticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.bootDiagnosticsEnabled"></a>

```csharp
public object BootDiagnosticsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}.

---

##### `DefenderForCloudEnabled`<sup>Optional</sup> <a name="DefenderForCloudEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.defenderForCloudEnabled"></a>

```csharp
public object DefenderForCloudEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}.

---

##### `GuestConfigurationEnabled`<sup>Optional</sup> <a name="GuestConfigurationEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.guestConfigurationEnabled"></a>

```csharp
public object GuestConfigurationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogAnalyticsEnabled`<sup>Optional</sup> <a name="LogAnalyticsEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.logAnalyticsEnabled"></a>

```csharp
public object LogAnalyticsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}.

---

##### `StatusChangeAlertEnabled`<sup>Optional</sup> <a name="StatusChangeAlertEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.statusChangeAlertEnabled"></a>

```csharp
public object StatusChangeAlertEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationConfig.property.timeouts"></a>

```csharp
public AutomanageConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts">AutomanageConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}

---

### AutomanageConfigurationTimeouts <a name="AutomanageConfigurationTimeouts" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.29.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomanageConfigurationAntimalwareExclusionsOutputReference <a name="AutomanageConfigurationAntimalwareExclusionsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationAntimalwareExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses">ResetProcesses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetExtensions"></a>

```csharp
private void ResetExtensions()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```

##### `ResetProcesses` <a name="ResetProcesses" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.resetProcesses"></a>

```csharp
private void ResetProcesses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput">ProcessesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions">Extensions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths">Paths</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes">Processes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensionsInput"></a>

```csharp
public string ExtensionsInput { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.pathsInput"></a>

```csharp
public string PathsInput { get; }
```

- *Type:* string

---

##### `ProcessesInput`<sup>Optional</sup> <a name="ProcessesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processesInput"></a>

```csharp
public string ProcessesInput { get; }
```

- *Type:* string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.extensions"></a>

```csharp
public string Extensions { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.paths"></a>

```csharp
public string Paths { get; }
```

- *Type:* string

---

##### `Processes`<sup>Required</sup> <a name="Processes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.processes"></a>

```csharp
public string Processes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationAntimalwareExclusions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---


### AutomanageConfigurationAntimalwareOutputReference <a name="AutomanageConfigurationAntimalwareOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationAntimalwareOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled">ResetRealTimeProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay">ResetScheduledScanDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled">ResetScheduledScanEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes">ResetScheduledScanTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType">ResetScheduledScanType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusions` <a name="PutExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions"></a>

```csharp
private void PutExclusions(AutomanageConfigurationAntimalwareExclusions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetRealTimeProtectionEnabled` <a name="ResetRealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetRealTimeProtectionEnabled"></a>

```csharp
private void ResetRealTimeProtectionEnabled()
```

##### `ResetScheduledScanDay` <a name="ResetScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanDay"></a>

```csharp
private void ResetScheduledScanDay()
```

##### `ResetScheduledScanEnabled` <a name="ResetScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanEnabled"></a>

```csharp
private void ResetScheduledScanEnabled()
```

##### `ResetScheduledScanTimeInMinutes` <a name="ResetScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanTimeInMinutes"></a>

```csharp
private void ResetScheduledScanTimeInMinutes()
```

##### `ResetScheduledScanType` <a name="ResetScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.resetScheduledScanType"></a>

```csharp
private void ResetScheduledScanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput">RealTimeProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput">ScheduledScanDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput">ScheduledScanEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput">ScheduledScanTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput">ScheduledScanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled">RealTimeProtectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay">ScheduledScanDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled">ScheduledScanEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes">ScheduledScanTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType">ScheduledScanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusions"></a>

```csharp
public AutomanageConfigurationAntimalwareExclusionsOutputReference Exclusions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusionsOutputReference">AutomanageConfigurationAntimalwareExclusionsOutputReference</a>

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.exclusionsInput"></a>

```csharp
public AutomanageConfigurationAntimalwareExclusions ExclusionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareExclusions">AutomanageConfigurationAntimalwareExclusions</a>

---

##### `RealTimeProtectionEnabledInput`<sup>Optional</sup> <a name="RealTimeProtectionEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabledInput"></a>

```csharp
public object RealTimeProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `ScheduledScanDayInput`<sup>Optional</sup> <a name="ScheduledScanDayInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDayInput"></a>

```csharp
public double ScheduledScanDayInput { get; }
```

- *Type:* double

---

##### `ScheduledScanEnabledInput`<sup>Optional</sup> <a name="ScheduledScanEnabledInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabledInput"></a>

```csharp
public object ScheduledScanEnabledInput { get; }
```

- *Type:* object

---

##### `ScheduledScanTimeInMinutesInput`<sup>Optional</sup> <a name="ScheduledScanTimeInMinutesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutesInput"></a>

```csharp
public double ScheduledScanTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `ScheduledScanTypeInput`<sup>Optional</sup> <a name="ScheduledScanTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTypeInput"></a>

```csharp
public string ScheduledScanTypeInput { get; }
```

- *Type:* string

---

##### `RealTimeProtectionEnabled`<sup>Required</sup> <a name="RealTimeProtectionEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.realTimeProtectionEnabled"></a>

```csharp
public object RealTimeProtectionEnabled { get; }
```

- *Type:* object

---

##### `ScheduledScanDay`<sup>Required</sup> <a name="ScheduledScanDay" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanDay"></a>

```csharp
public double ScheduledScanDay { get; }
```

- *Type:* double

---

##### `ScheduledScanEnabled`<sup>Required</sup> <a name="ScheduledScanEnabled" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanEnabled"></a>

```csharp
public object ScheduledScanEnabled { get; }
```

- *Type:* object

---

##### `ScheduledScanTimeInMinutes`<sup>Required</sup> <a name="ScheduledScanTimeInMinutes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanTimeInMinutes"></a>

```csharp
public double ScheduledScanTimeInMinutes { get; }
```

- *Type:* double

---

##### `ScheduledScanType`<sup>Required</sup> <a name="ScheduledScanType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.scheduledScanType"></a>

```csharp
public string ScheduledScanType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalwareOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationAntimalware InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAntimalware">AutomanageConfigurationAntimalware</a>

---


### AutomanageConfigurationAzureSecurityBaselineOutputReference <a name="AutomanageConfigurationAzureSecurityBaselineOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationAzureSecurityBaselineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType">ResetAssignmentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssignmentType` <a name="ResetAssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.resetAssignmentType"></a>

```csharp
private void ResetAssignmentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput">AssignmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType">AssignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignmentTypeInput`<sup>Optional</sup> <a name="AssignmentTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentTypeInput"></a>

```csharp
public string AssignmentTypeInput { get; }
```

- *Type:* string

---

##### `AssignmentType`<sup>Required</sup> <a name="AssignmentType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.assignmentType"></a>

```csharp
public string AssignmentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaselineOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationAzureSecurityBaseline InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationAzureSecurityBaseline">AutomanageConfigurationAzureSecurityBaseline</a>

---


### AutomanageConfigurationBackupOutputReference <a name="AutomanageConfigurationBackupOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy">PutSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays">ResetInstantRpRetentionRangeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy">ResetSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy"></a>

```csharp
private void PutRetentionPolicy(AutomanageConfigurationBackupRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `PutSchedulePolicy` <a name="PutSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy"></a>

```csharp
private void PutSchedulePolicy(AutomanageConfigurationBackupSchedulePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.putSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `ResetInstantRpRetentionRangeInDays` <a name="ResetInstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetInstantRpRetentionRangeInDays"></a>

```csharp
private void ResetInstantRpRetentionRangeInDays()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetPolicyName"></a>

```csharp
private void ResetPolicyName()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetRetentionPolicy"></a>

```csharp
private void ResetRetentionPolicy()
```

##### `ResetSchedulePolicy` <a name="ResetSchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetSchedulePolicy"></a>

```csharp
private void ResetSchedulePolicy()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy">SchedulePolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput">InstantRpRetentionRangeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput">SchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays">InstantRpRetentionRangeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicy"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyOutputReference RetentionPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference">AutomanageConfigurationBackupRetentionPolicyOutputReference</a>

---

##### `SchedulePolicy`<sup>Required</sup> <a name="SchedulePolicy" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicy"></a>

```csharp
public AutomanageConfigurationBackupSchedulePolicyOutputReference SchedulePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference">AutomanageConfigurationBackupSchedulePolicyOutputReference</a>

---

##### `InstantRpRetentionRangeInDaysInput`<sup>Optional</sup> <a name="InstantRpRetentionRangeInDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDaysInput"></a>

```csharp
public double InstantRpRetentionRangeInDaysInput { get; }
```

- *Type:* double

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.retentionPolicyInput"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicy RetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---

##### `SchedulePolicyInput`<sup>Optional</sup> <a name="SchedulePolicyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.schedulePolicyInput"></a>

```csharp
public AutomanageConfigurationBackupSchedulePolicy SchedulePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `InstantRpRetentionRangeInDays`<sup>Required</sup> <a name="InstantRpRetentionRangeInDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.instantRpRetentionRangeInDays"></a>

```csharp
public double InstantRpRetentionRangeInDays { get; }
```

- *Type:* double

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackup">AutomanageConfigurationBackup</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration">PutRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration">ResetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes">ResetRetentionTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionDuration` <a name="PutRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration"></a>

```csharp
private void PutRetentionDuration(AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `ResetRetentionDuration` <a name="ResetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionDuration"></a>

```csharp
private void ResetRetentionDuration()
```

##### `ResetRetentionTimes` <a name="ResetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.resetRetentionTimes"></a>

```csharp
private void ResetRetentionTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput">RetentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput">RetentionTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes">RetentionTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDuration"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference RetentionDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference</a>

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionDurationInput"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration RetentionDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---

##### `RetentionTimesInput`<sup>Optional</sup> <a name="RetentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimesInput"></a>

```csharp
public string[] RetentionTimesInput { get; }
```

- *Type:* string[]

---

##### `RetentionTimes`<sup>Required</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.retentionTimes"></a>

```csharp
public string[] RetentionTimes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType">ResetDurationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetDurationType` <a name="ResetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```csharp
private void ResetDurationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput">DurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType">DurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `DurationTypeInput`<sup>Optional</sup> <a name="DurationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```csharp
public string DurationTypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DurationType`<sup>Required</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.durationType"></a>

```csharp
public string DurationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupRetentionPolicyOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType">ResetRetentionPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule"></a>

```csharp
private void PutDailySchedule(AutomanageConfigurationBackupRetentionPolicyDailySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule"></a>

```csharp
private void PutWeeklySchedule(AutomanageConfigurationBackupRetentionPolicyWeeklySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetDailySchedule"></a>

```csharp
private void ResetDailySchedule()
```

##### `ResetRetentionPolicyType` <a name="ResetRetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetRetentionPolicyType"></a>

```csharp
private void ResetRetentionPolicyType()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.resetWeeklySchedule"></a>

```csharp
private void ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput">RetentionPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType">RetentionPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailySchedule"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference DailySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklySchedule"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference WeeklySchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.dailyScheduleInput"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyDailySchedule DailyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyDailySchedule">AutomanageConfigurationBackupRetentionPolicyDailySchedule</a>

---

##### `RetentionPolicyTypeInput`<sup>Optional</sup> <a name="RetentionPolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyTypeInput"></a>

```csharp
public string RetentionPolicyTypeInput { get; }
```

- *Type:* string

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.weeklyScheduleInput"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklySchedule WeeklyScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---

##### `RetentionPolicyType`<sup>Required</sup> <a name="RetentionPolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.retentionPolicyType"></a>

```csharp
public string RetentionPolicyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicy">AutomanageConfigurationBackupRetentionPolicy</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration">PutRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration">ResetRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes">ResetRetentionTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionDuration` <a name="PutRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration"></a>

```csharp
private void PutRetentionDuration(AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.putRetentionDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `ResetRetentionDuration` <a name="ResetRetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionDuration"></a>

```csharp
private void ResetRetentionDuration()
```

##### `ResetRetentionTimes` <a name="ResetRetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.resetRetentionTimes"></a>

```csharp
private void ResetRetentionTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration">RetentionDuration</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput">RetentionDurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput">RetentionTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes">RetentionTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetentionDuration`<sup>Required</sup> <a name="RetentionDuration" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDuration"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference RetentionDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference</a>

---

##### `RetentionDurationInput`<sup>Optional</sup> <a name="RetentionDurationInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionDurationInput"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration RetentionDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---

##### `RetentionTimesInput`<sup>Optional</sup> <a name="RetentionTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimesInput"></a>

```csharp
public string[] RetentionTimesInput { get; }
```

- *Type:* string[]

---

##### `RetentionTimes`<sup>Required</sup> <a name="RetentionTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.retentionTimes"></a>

```csharp
public string[] RetentionTimes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklySchedule">AutomanageConfigurationBackupRetentionPolicyWeeklySchedule</a>

---


### AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference <a name="AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType">ResetDurationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetDurationType` <a name="ResetDurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.resetDurationType"></a>

```csharp
private void ResetDurationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput">DurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType">DurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `DurationTypeInput`<sup>Optional</sup> <a name="DurationTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationTypeInput"></a>

```csharp
public string DurationTypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DurationType`<sup>Required</sup> <a name="DurationType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.durationType"></a>

```csharp
public string DurationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration">AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration</a>

---


### AutomanageConfigurationBackupSchedulePolicyOutputReference <a name="AutomanageConfigurationBackupSchedulePolicyOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationBackupSchedulePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType">ResetSchedulePolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays">ResetScheduleRunDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency">ResetScheduleRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes">ResetScheduleRunTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchedulePolicyType` <a name="ResetSchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetSchedulePolicyType"></a>

```csharp
private void ResetSchedulePolicyType()
```

##### `ResetScheduleRunDays` <a name="ResetScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunDays"></a>

```csharp
private void ResetScheduleRunDays()
```

##### `ResetScheduleRunFrequency` <a name="ResetScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunFrequency"></a>

```csharp
private void ResetScheduleRunFrequency()
```

##### `ResetScheduleRunTimes` <a name="ResetScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.resetScheduleRunTimes"></a>

```csharp
private void ResetScheduleRunTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput">SchedulePolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput">ScheduleRunDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput">ScheduleRunFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput">ScheduleRunTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType">SchedulePolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays">ScheduleRunDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency">ScheduleRunFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes">ScheduleRunTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchedulePolicyTypeInput`<sup>Optional</sup> <a name="SchedulePolicyTypeInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyTypeInput"></a>

```csharp
public string SchedulePolicyTypeInput { get; }
```

- *Type:* string

---

##### `ScheduleRunDaysInput`<sup>Optional</sup> <a name="ScheduleRunDaysInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDaysInput"></a>

```csharp
public string[] ScheduleRunDaysInput { get; }
```

- *Type:* string[]

---

##### `ScheduleRunFrequencyInput`<sup>Optional</sup> <a name="ScheduleRunFrequencyInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequencyInput"></a>

```csharp
public string ScheduleRunFrequencyInput { get; }
```

- *Type:* string

---

##### `ScheduleRunTimesInput`<sup>Optional</sup> <a name="ScheduleRunTimesInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimesInput"></a>

```csharp
public string[] ScheduleRunTimesInput { get; }
```

- *Type:* string[]

---

##### `SchedulePolicyType`<sup>Required</sup> <a name="SchedulePolicyType" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.schedulePolicyType"></a>

```csharp
public string SchedulePolicyType { get; }
```

- *Type:* string

---

##### `ScheduleRunDays`<sup>Required</sup> <a name="ScheduleRunDays" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunDays"></a>

```csharp
public string[] ScheduleRunDays { get; }
```

- *Type:* string[]

---

##### `ScheduleRunFrequency`<sup>Required</sup> <a name="ScheduleRunFrequency" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunFrequency"></a>

```csharp
public string ScheduleRunFrequency { get; }
```

- *Type:* string

---

##### `ScheduleRunTimes`<sup>Required</sup> <a name="ScheduleRunTimes" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.scheduleRunTimes"></a>

```csharp
public string[] ScheduleRunTimes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicyOutputReference.property.internalValue"></a>

```csharp
public AutomanageConfigurationBackupSchedulePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationBackupSchedulePolicy">AutomanageConfigurationBackupSchedulePolicy</a>

---


### AutomanageConfigurationTimeoutsOutputReference <a name="AutomanageConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomanageConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automanageConfiguration.AutomanageConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



