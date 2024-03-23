# `appServiceSourceControlSlot` Submodule <a name="`appServiceSourceControlSlot` Submodule" id="@cdktf/provider-azurerm.appServiceSourceControlSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControlSlot <a name="AppServiceSourceControlSlot" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot azurerm_app_service_source_control_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlot(Construct Scope, string Id, AppServiceSourceControlSlotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig">AppServiceSourceControlSlotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig">AppServiceSourceControlSlotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putGithubActionConfiguration">PutGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetGithubActionConfiguration">ResetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRepoUrl">ResetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRollbackEnabled">ResetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseLocalGit">ResetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseManualIntegration">ResetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseMercurial">ResetUseMercurial</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGithubActionConfiguration` <a name="PutGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putGithubActionConfiguration"></a>

```csharp
private void PutGithubActionConfiguration(AppServiceSourceControlSlotGithubActionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putTimeouts"></a>

```csharp
private void PutTimeouts(AppServiceSourceControlSlotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

---

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetGithubActionConfiguration` <a name="ResetGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetGithubActionConfiguration"></a>

```csharp
private void ResetGithubActionConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRepoUrl` <a name="ResetRepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRepoUrl"></a>

```csharp
private void ResetRepoUrl()
```

##### `ResetRollbackEnabled` <a name="ResetRollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetRollbackEnabled"></a>

```csharp
private void ResetRollbackEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseLocalGit` <a name="ResetUseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseLocalGit"></a>

```csharp
private void ResetUseLocalGit()
```

##### `ResetUseManualIntegration` <a name="ResetUseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseManualIntegration"></a>

```csharp
private void ResetUseManualIntegration()
```

##### `ResetUseMercurial` <a name="ResetUseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.resetUseMercurial"></a>

```csharp
private void ResetUseMercurial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSourceControlSlot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlSlot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlSlot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlSlot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlSlot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppServiceSourceControlSlot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceSourceControlSlot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceSourceControlSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSourceControlSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfiguration">GithubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference">AppServiceSourceControlSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.usesGithubAction">UsesGithubAction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfigurationInput">GithubActionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrlInput">RepoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabledInput">RollbackEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotIdInput">SlotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGitInput">UseLocalGitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegrationInput">UseManualIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurialInput">UseMercurialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrl">RepoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabled">RollbackEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotId">SlotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGit">UseLocalGit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegration">UseManualIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurial">UseMercurial</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GithubActionConfiguration`<sup>Required</sup> <a name="GithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfiguration"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationOutputReference GithubActionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationOutputReference</a>

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeouts"></a>

```csharp
public AppServiceSourceControlSlotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference">AppServiceSourceControlSlotTimeoutsOutputReference</a>

---

##### `UsesGithubAction`<sup>Required</sup> <a name="UsesGithubAction" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.usesGithubAction"></a>

```csharp
public IResolvable UsesGithubAction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `GithubActionConfigurationInput`<sup>Optional</sup> <a name="GithubActionConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.githubActionConfigurationInput"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfiguration GithubActionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepoUrlInput`<sup>Optional</sup> <a name="RepoUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrlInput"></a>

```csharp
public string RepoUrlInput { get; }
```

- *Type:* string

---

##### `RollbackEnabledInput`<sup>Optional</sup> <a name="RollbackEnabledInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabledInput"></a>

```csharp
public object RollbackEnabledInput { get; }
```

- *Type:* object

---

##### `SlotIdInput`<sup>Optional</sup> <a name="SlotIdInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotIdInput"></a>

```csharp
public string SlotIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseLocalGitInput`<sup>Optional</sup> <a name="UseLocalGitInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGitInput"></a>

```csharp
public object UseLocalGitInput { get; }
```

- *Type:* object

---

##### `UseManualIntegrationInput`<sup>Optional</sup> <a name="UseManualIntegrationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegrationInput"></a>

```csharp
public object UseManualIntegrationInput { get; }
```

- *Type:* object

---

##### `UseMercurialInput`<sup>Optional</sup> <a name="UseMercurialInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurialInput"></a>

```csharp
public object UseMercurialInput { get; }
```

- *Type:* object

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RepoUrl`<sup>Required</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.repoUrl"></a>

```csharp
public string RepoUrl { get; }
```

- *Type:* string

---

##### `RollbackEnabled`<sup>Required</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.rollbackEnabled"></a>

```csharp
public object RollbackEnabled { get; }
```

- *Type:* object

---

##### `SlotId`<sup>Required</sup> <a name="SlotId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.slotId"></a>

```csharp
public string SlotId { get; }
```

- *Type:* string

---

##### `UseLocalGit`<sup>Required</sup> <a name="UseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useLocalGit"></a>

```csharp
public object UseLocalGit { get; }
```

- *Type:* object

---

##### `UseManualIntegration`<sup>Required</sup> <a name="UseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useManualIntegration"></a>

```csharp
public object UseManualIntegration { get; }
```

- *Type:* object

---

##### `UseMercurial`<sup>Required</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.useMercurial"></a>

```csharp
public object UseMercurial { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlSlotConfig <a name="AppServiceSourceControlSlotConfig" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SlotId,
    string Branch = null,
    AppServiceSourceControlSlotGithubActionConfiguration GithubActionConfiguration = null,
    string Id = null,
    string RepoUrl = null,
    object RollbackEnabled = null,
    AppServiceSourceControlSlotTimeouts Timeouts = null,
    object UseLocalGit = null,
    object UseManualIntegration = null,
    object UseMercurial = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.slotId">SlotId</a></code> | <code>string</code> | The ID of the Linux or Windows Web App Slot. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.branch">Branch</a></code> | <code>string</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.githubActionConfiguration">GithubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#id AppServiceSourceControlSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.repoUrl">RepoUrl</a></code> | <code>string</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.rollbackEnabled">RollbackEnabled</a></code> | <code>object</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useLocalGit">UseLocalGit</a></code> | <code>object</code> | Should the Slot use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useManualIntegration">UseManualIntegration</a></code> | <code>object</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useMercurial">UseMercurial</a></code> | <code>object</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SlotId`<sup>Required</sup> <a name="SlotId" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.slotId"></a>

```csharp
public string SlotId { get; set; }
```

- *Type:* string

The ID of the Linux or Windows Web App Slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#slot_id AppServiceSourceControlSlot#slot_id}

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#branch AppServiceSourceControlSlot#branch}

---

##### `GithubActionConfiguration`<sup>Optional</sup> <a name="GithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.githubActionConfiguration"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfiguration GithubActionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#github_action_configuration AppServiceSourceControlSlot#github_action_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#id AppServiceSourceControlSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RepoUrl`<sup>Optional</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.repoUrl"></a>

```csharp
public string RepoUrl { get; set; }
```

- *Type:* string

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#repo_url AppServiceSourceControlSlot#repo_url}

---

##### `RollbackEnabled`<sup>Optional</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.rollbackEnabled"></a>

```csharp
public object RollbackEnabled { get; set; }
```

- *Type:* object

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#rollback_enabled AppServiceSourceControlSlot#rollback_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.timeouts"></a>

```csharp
public AppServiceSourceControlSlotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts">AppServiceSourceControlSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#timeouts AppServiceSourceControlSlot#timeouts}

---

##### `UseLocalGit`<sup>Optional</sup> <a name="UseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useLocalGit"></a>

```csharp
public object UseLocalGit { get; set; }
```

- *Type:* object

Should the Slot use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#use_local_git AppServiceSourceControlSlot#use_local_git}

---

##### `UseManualIntegration`<sup>Optional</sup> <a name="UseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useManualIntegration"></a>

```csharp
public object UseManualIntegration { get; set; }
```

- *Type:* object

Should code be deployed manually.

Set to `true` to disable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#use_manual_integration AppServiceSourceControlSlot#use_manual_integration}

---

##### `UseMercurial`<sup>Optional</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotConfig.property.useMercurial"></a>

```csharp
public object UseMercurial { get; set; }
```

- *Type:* object

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#use_mercurial AppServiceSourceControlSlot#use_mercurial}

---

### AppServiceSourceControlSlotGithubActionConfiguration <a name="AppServiceSourceControlSlotGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotGithubActionConfiguration {
    AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration CodeConfiguration = null,
    AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration ContainerConfiguration = null,
    object GenerateWorkflowFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.generateWorkflowFile">GenerateWorkflowFile</a></code> | <code>object</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `CodeConfiguration`<sup>Optional</sup> <a name="CodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.codeConfiguration"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration CodeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#code_configuration AppServiceSourceControlSlot#code_configuration}

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.containerConfiguration"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration ContainerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#container_configuration AppServiceSourceControlSlot#container_configuration}

---

##### `GenerateWorkflowFile`<sup>Optional</sup> <a name="GenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration.property.generateWorkflowFile"></a>

```csharp
public object GenerateWorkflowFile { get; set; }
```

- *Type:* object

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#generate_workflow_file AppServiceSourceControlSlot#generate_workflow_file}

---

### AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration {
    string RuntimeStack,
    string RuntimeVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeStack">RuntimeStack</a></code> | <code>string</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `RuntimeStack`<sup>Required</sup> <a name="RuntimeStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```csharp
public string RuntimeStack { get; set; }
```

- *Type:* string

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#runtime_stack AppServiceSourceControlSlot#runtime_stack}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#runtime_version AppServiceSourceControlSlot#runtime_version}

---

### AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration {
    string ImageName,
    string RegistryUrl,
    string RegistryPassword = null,
    string RegistryUsername = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.imageName">ImageName</a></code> | <code>string</code> | The image name for the build. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | The username used to upload the image to the container registry. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#image_name AppServiceSourceControlSlot#image_name}

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; set; }
```

- *Type:* string

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#registry_url AppServiceSourceControlSlot#registry_url}

---

##### `RegistryPassword`<sup>Optional</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; set; }
```

- *Type:* string

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#registry_password AppServiceSourceControlSlot#registry_password}

---

##### `RegistryUsername`<sup>Optional</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; set; }
```

- *Type:* string

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#registry_username AppServiceSourceControlSlot#registry_username}

---

### AppServiceSourceControlSlotTimeouts <a name="AppServiceSourceControlSlotTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#create AppServiceSourceControlSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#delete AppServiceSourceControlSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#read AppServiceSourceControlSlot#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#create AppServiceSourceControlSlot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#delete AppServiceSourceControlSlot#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/app_service_source_control_slot#read AppServiceSourceControlSlot#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">RuntimeStackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">RuntimeStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeStackInput`<sup>Optional</sup> <a name="RuntimeStackInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```csharp
public string RuntimeStackInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeStack`<sup>Required</sup> <a name="RuntimeStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```csharp
public string RuntimeStack { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">ResetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">ResetRegistryUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryPassword` <a name="ResetRegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```csharp
private void ResetRegistryPassword()
```

##### `ResetRegistryUsername` <a name="ResetRegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```csharp
private void ResetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">RegistryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">RegistryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">RegistryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `RegistryPasswordInput`<sup>Optional</sup> <a name="RegistryPasswordInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```csharp
public string RegistryPasswordInput { get; }
```

- *Type:* string

---

##### `RegistryUrlInput`<sup>Optional</sup> <a name="RegistryUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```csharp
public string RegistryUrlInput { get; }
```

- *Type:* string

---

##### `RegistryUsernameInput`<sup>Optional</sup> <a name="RegistryUsernameInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```csharp
public string RegistryUsernameInput { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `RegistryPassword`<sup>Required</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; }
```

- *Type:* string

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; }
```

- *Type:* string

---

##### `RegistryUsername`<sup>Required</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlSlotGithubActionConfigurationOutputReference <a name="AppServiceSourceControlSlotGithubActionConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotGithubActionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putCodeConfiguration">PutCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetCodeConfiguration">ResetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">ResetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfiguration` <a name="PutCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```csharp
private void PutCodeConfiguration(AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

---

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```csharp
private void PutContainerConfiguration(AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

---

##### `ResetCodeConfiguration` <a name="ResetCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```csharp
private void ResetCodeConfiguration()
```

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```csharp
private void ResetContainerConfiguration()
```

##### `ResetGenerateWorkflowFile` <a name="ResetGenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```csharp
private void ResetGenerateWorkflowFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.linuxAction">LinuxAction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfigurationInput">CodeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">GenerateWorkflowFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFile">GenerateWorkflowFile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfiguration`<sup>Required</sup> <a name="CodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference CodeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference ContainerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlSlotGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `LinuxAction`<sup>Required</sup> <a name="LinuxAction" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.linuxAction"></a>

```csharp
public IResolvable LinuxAction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CodeConfigurationInput`<sup>Optional</sup> <a name="CodeConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration CodeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration">AppServiceSourceControlSlotGithubActionConfigurationCodeConfiguration</a>

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration ContainerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration">AppServiceSourceControlSlotGithubActionConfigurationContainerConfiguration</a>

---

##### `GenerateWorkflowFileInput`<sup>Optional</sup> <a name="GenerateWorkflowFileInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```csharp
public object GenerateWorkflowFileInput { get; }
```

- *Type:* object

---

##### `GenerateWorkflowFile`<sup>Required</sup> <a name="GenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```csharp
public object GenerateWorkflowFile { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfigurationOutputReference.property.internalValue"></a>

```csharp
public AppServiceSourceControlSlotGithubActionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotGithubActionConfiguration">AppServiceSourceControlSlotGithubActionConfiguration</a>

---


### AppServiceSourceControlSlotTimeoutsOutputReference <a name="AppServiceSourceControlSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlSlotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControlSlot.AppServiceSourceControlSlotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



