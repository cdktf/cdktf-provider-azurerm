# `securityCenterStorageDefender` Submodule <a name="`securityCenterStorageDefender` Submodule" id="@cdktf/provider-azurerm.securityCenterStorageDefender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterStorageDefender <a name="SecurityCenterStorageDefender" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender azurerm_security_center_storage_defender}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterStorageDefender(Construct Scope, string Id, SecurityCenterStorageDefenderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig">SecurityCenterStorageDefenderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig">SecurityCenterStorageDefenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth">ResetMalwareScanningOnUploadCapGbPerMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled">ResetMalwareScanningOnUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled">ResetOverrideSubscriptionSettingsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetScanResultsEventGridTopicId">ResetScanResultsEventGridTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled">ResetSensitiveDataDiscoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityCenterStorageDefenderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMalwareScanningOnUploadCapGbPerMonth` <a name="ResetMalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadCapGbPerMonth"></a>

```csharp
private void ResetMalwareScanningOnUploadCapGbPerMonth()
```

##### `ResetMalwareScanningOnUploadEnabled` <a name="ResetMalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetMalwareScanningOnUploadEnabled"></a>

```csharp
private void ResetMalwareScanningOnUploadEnabled()
```

##### `ResetOverrideSubscriptionSettingsEnabled` <a name="ResetOverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetOverrideSubscriptionSettingsEnabled"></a>

```csharp
private void ResetOverrideSubscriptionSettingsEnabled()
```

##### `ResetScanResultsEventGridTopicId` <a name="ResetScanResultsEventGridTopicId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetScanResultsEventGridTopicId"></a>

```csharp
private void ResetScanResultsEventGridTopicId()
```

##### `ResetSensitiveDataDiscoveryEnabled` <a name="ResetSensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetSensitiveDataDiscoveryEnabled"></a>

```csharp
private void ResetSensitiveDataDiscoveryEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterStorageDefender.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterStorageDefender.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterStorageDefender.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SecurityCenterStorageDefender.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityCenterStorageDefender resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityCenterStorageDefender to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityCenterStorageDefender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityCenterStorageDefender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput">MalwareScanningOnUploadCapGbPerMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput">MalwareScanningOnUploadEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput">OverrideSubscriptionSettingsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.scanResultsEventGridTopicIdInput">ScanResultsEventGridTopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput">SensitiveDataDiscoveryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth">MalwareScanningOnUploadCapGbPerMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled">MalwareScanningOnUploadEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled">OverrideSubscriptionSettingsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.scanResultsEventGridTopicId">ScanResultsEventGridTopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled">SensitiveDataDiscoveryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeouts"></a>

```csharp
public SecurityCenterStorageDefenderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference">SecurityCenterStorageDefenderTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MalwareScanningOnUploadCapGbPerMonthInput`<sup>Optional</sup> <a name="MalwareScanningOnUploadCapGbPerMonthInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonthInput"></a>

```csharp
public double MalwareScanningOnUploadCapGbPerMonthInput { get; }
```

- *Type:* double

---

##### `MalwareScanningOnUploadEnabledInput`<sup>Optional</sup> <a name="MalwareScanningOnUploadEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabledInput"></a>

```csharp
public object MalwareScanningOnUploadEnabledInput { get; }
```

- *Type:* object

---

##### `OverrideSubscriptionSettingsEnabledInput`<sup>Optional</sup> <a name="OverrideSubscriptionSettingsEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabledInput"></a>

```csharp
public object OverrideSubscriptionSettingsEnabledInput { get; }
```

- *Type:* object

---

##### `ScanResultsEventGridTopicIdInput`<sup>Optional</sup> <a name="ScanResultsEventGridTopicIdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.scanResultsEventGridTopicIdInput"></a>

```csharp
public string ScanResultsEventGridTopicIdInput { get; }
```

- *Type:* string

---

##### `SensitiveDataDiscoveryEnabledInput`<sup>Optional</sup> <a name="SensitiveDataDiscoveryEnabledInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabledInput"></a>

```csharp
public object SensitiveDataDiscoveryEnabledInput { get; }
```

- *Type:* object

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MalwareScanningOnUploadCapGbPerMonth`<sup>Required</sup> <a name="MalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadCapGbPerMonth"></a>

```csharp
public double MalwareScanningOnUploadCapGbPerMonth { get; }
```

- *Type:* double

---

##### `MalwareScanningOnUploadEnabled`<sup>Required</sup> <a name="MalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.malwareScanningOnUploadEnabled"></a>

```csharp
public object MalwareScanningOnUploadEnabled { get; }
```

- *Type:* object

---

##### `OverrideSubscriptionSettingsEnabled`<sup>Required</sup> <a name="OverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.overrideSubscriptionSettingsEnabled"></a>

```csharp
public object OverrideSubscriptionSettingsEnabled { get; }
```

- *Type:* object

---

##### `ScanResultsEventGridTopicId`<sup>Required</sup> <a name="ScanResultsEventGridTopicId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.scanResultsEventGridTopicId"></a>

```csharp
public string ScanResultsEventGridTopicId { get; }
```

- *Type:* string

---

##### `SensitiveDataDiscoveryEnabled`<sup>Required</sup> <a name="SensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.sensitiveDataDiscoveryEnabled"></a>

```csharp
public object SensitiveDataDiscoveryEnabled { get; }
```

- *Type:* object

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefender.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterStorageDefenderConfig <a name="SecurityCenterStorageDefenderConfig" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterStorageDefenderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StorageAccountId,
    string Id = null,
    double MalwareScanningOnUploadCapGbPerMonth = null,
    object MalwareScanningOnUploadEnabled = null,
    object OverrideSubscriptionSettingsEnabled = null,
    string ScanResultsEventGridTopicId = null,
    object SensitiveDataDiscoveryEnabled = null,
    SecurityCenterStorageDefenderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth">MalwareScanningOnUploadCapGbPerMonth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled">MalwareScanningOnUploadEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled">OverrideSubscriptionSettingsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.scanResultsEventGridTopicId">ScanResultsEventGridTopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#scan_results_event_grid_topic_id SecurityCenterStorageDefender#scan_results_event_grid_topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled">SensitiveDataDiscoveryEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#storage_account_id SecurityCenterStorageDefender#storage_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#id SecurityCenterStorageDefender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MalwareScanningOnUploadCapGbPerMonth`<sup>Optional</sup> <a name="MalwareScanningOnUploadCapGbPerMonth" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadCapGbPerMonth"></a>

```csharp
public double MalwareScanningOnUploadCapGbPerMonth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_cap_gb_per_month SecurityCenterStorageDefender#malware_scanning_on_upload_cap_gb_per_month}.

---

##### `MalwareScanningOnUploadEnabled`<sup>Optional</sup> <a name="MalwareScanningOnUploadEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.malwareScanningOnUploadEnabled"></a>

```csharp
public object MalwareScanningOnUploadEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#malware_scanning_on_upload_enabled SecurityCenterStorageDefender#malware_scanning_on_upload_enabled}.

---

##### `OverrideSubscriptionSettingsEnabled`<sup>Optional</sup> <a name="OverrideSubscriptionSettingsEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.overrideSubscriptionSettingsEnabled"></a>

```csharp
public object OverrideSubscriptionSettingsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#override_subscription_settings_enabled SecurityCenterStorageDefender#override_subscription_settings_enabled}.

---

##### `ScanResultsEventGridTopicId`<sup>Optional</sup> <a name="ScanResultsEventGridTopicId" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.scanResultsEventGridTopicId"></a>

```csharp
public string ScanResultsEventGridTopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#scan_results_event_grid_topic_id SecurityCenterStorageDefender#scan_results_event_grid_topic_id}.

---

##### `SensitiveDataDiscoveryEnabled`<sup>Optional</sup> <a name="SensitiveDataDiscoveryEnabled" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.sensitiveDataDiscoveryEnabled"></a>

```csharp
public object SensitiveDataDiscoveryEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#sensitive_data_discovery_enabled SecurityCenterStorageDefender#sensitive_data_discovery_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderConfig.property.timeouts"></a>

```csharp
public SecurityCenterStorageDefenderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts">SecurityCenterStorageDefenderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#timeouts SecurityCenterStorageDefender#timeouts}

---

### SecurityCenterStorageDefenderTimeouts <a name="SecurityCenterStorageDefenderTimeouts" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterStorageDefenderTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#create SecurityCenterStorageDefender#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#delete SecurityCenterStorageDefender#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#read SecurityCenterStorageDefender#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/security_center_storage_defender#update SecurityCenterStorageDefender#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterStorageDefenderTimeoutsOutputReference <a name="SecurityCenterStorageDefenderTimeoutsOutputReference" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SecurityCenterStorageDefenderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.securityCenterStorageDefender.SecurityCenterStorageDefenderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



