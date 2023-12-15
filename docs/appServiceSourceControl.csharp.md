# `appServiceSourceControl` Submodule <a name="`appServiceSourceControl` Submodule" id="@cdktf/provider-azurerm.appServiceSourceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControlA <a name="AppServiceSourceControlA" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control azurerm_app_service_source_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlA(Construct Scope, string Id, AppServiceSourceControlAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig">AppServiceSourceControlAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig">AppServiceSourceControlAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration">PutGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration">ResetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl">ResetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled">ResetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit">ResetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration">ResetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial">ResetUseMercurial</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGithubActionConfiguration` <a name="PutGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration"></a>

```csharp
private void PutGithubActionConfiguration(AppServiceSourceControlGithubActionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts"></a>

```csharp
private void PutTimeouts(AppServiceSourceControlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetGithubActionConfiguration` <a name="ResetGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetGithubActionConfiguration"></a>

```csharp
private void ResetGithubActionConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRepoUrl` <a name="ResetRepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRepoUrl"></a>

```csharp
private void ResetRepoUrl()
```

##### `ResetRollbackEnabled` <a name="ResetRollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetRollbackEnabled"></a>

```csharp
private void ResetRollbackEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseLocalGit` <a name="ResetUseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseLocalGit"></a>

```csharp
private void ResetUseLocalGit()
```

##### `ResetUseManualIntegration` <a name="ResetUseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseManualIntegration"></a>

```csharp
private void ResetUseManualIntegration()
```

##### `ResetUseMercurial` <a name="ResetUseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.resetUseMercurial"></a>

```csharp
private void ResetUseMercurial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppServiceSourceControlA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceSourceControlA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppServiceSourceControlA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceSourceControlA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceSourceControlA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSourceControlA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration">GithubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType">ScmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction">UsesGithubAction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput">GithubActionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput">RepoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput">RollbackEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput">UseLocalGitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput">UseManualIntegrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput">UseMercurialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl">RepoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled">RollbackEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit">UseLocalGit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration">UseManualIntegration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial">UseMercurial</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GithubActionConfiguration`<sup>Required</sup> <a name="GithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfiguration"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationOutputReference GithubActionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a>

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.scmType"></a>

```csharp
public string ScmType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeouts"></a>

```csharp
public AppServiceSourceControlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a>

---

##### `UsesGithubAction`<sup>Required</sup> <a name="UsesGithubAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.usesGithubAction"></a>

```csharp
public IResolvable UsesGithubAction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `GithubActionConfigurationInput`<sup>Optional</sup> <a name="GithubActionConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.githubActionConfigurationInput"></a>

```csharp
public AppServiceSourceControlGithubActionConfiguration GithubActionConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepoUrlInput`<sup>Optional</sup> <a name="RepoUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrlInput"></a>

```csharp
public string RepoUrlInput { get; }
```

- *Type:* string

---

##### `RollbackEnabledInput`<sup>Optional</sup> <a name="RollbackEnabledInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabledInput"></a>

```csharp
public object RollbackEnabledInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UseLocalGitInput`<sup>Optional</sup> <a name="UseLocalGitInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGitInput"></a>

```csharp
public object UseLocalGitInput { get; }
```

- *Type:* object

---

##### `UseManualIntegrationInput`<sup>Optional</sup> <a name="UseManualIntegrationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegrationInput"></a>

```csharp
public object UseManualIntegrationInput { get; }
```

- *Type:* object

---

##### `UseMercurialInput`<sup>Optional</sup> <a name="UseMercurialInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurialInput"></a>

```csharp
public object UseMercurialInput { get; }
```

- *Type:* object

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RepoUrl`<sup>Required</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.repoUrl"></a>

```csharp
public string RepoUrl { get; }
```

- *Type:* string

---

##### `RollbackEnabled`<sup>Required</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.rollbackEnabled"></a>

```csharp
public object RollbackEnabled { get; }
```

- *Type:* object

---

##### `UseLocalGit`<sup>Required</sup> <a name="UseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useLocalGit"></a>

```csharp
public object UseLocalGit { get; }
```

- *Type:* object

---

##### `UseManualIntegration`<sup>Required</sup> <a name="UseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useManualIntegration"></a>

```csharp
public object UseManualIntegration { get; }
```

- *Type:* object

---

##### `UseMercurial`<sup>Required</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.useMercurial"></a>

```csharp
public object UseMercurial { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlAConfig <a name="AppServiceSourceControlAConfig" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Branch = null,
    AppServiceSourceControlGithubActionConfiguration GithubActionConfiguration = null,
    string Id = null,
    string RepoUrl = null,
    object RollbackEnabled = null,
    AppServiceSourceControlTimeouts Timeouts = null,
    object UseLocalGit = null,
    object UseManualIntegration = null,
    object UseMercurial = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId">AppId</a></code> | <code>string</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch">Branch</a></code> | <code>string</code> | The branch name to use for deployments. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration">GithubActionConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl">RepoUrl</a></code> | <code>string</code> | The URL for the repository. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled">RollbackEnabled</a></code> | <code>object</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit">UseLocalGit</a></code> | <code>object</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration">UseManualIntegration</a></code> | <code>object</code> | Should code be deployed manually. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial">UseMercurial</a></code> | <code>object</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#app_id AppServiceSourceControlA#app_id}

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#branch AppServiceSourceControlA#branch}

---

##### `GithubActionConfiguration`<sup>Optional</sup> <a name="GithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.githubActionConfiguration"></a>

```csharp
public AppServiceSourceControlGithubActionConfiguration GithubActionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControlA#github_action_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#id AppServiceSourceControlA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RepoUrl`<sup>Optional</sup> <a name="RepoUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.repoUrl"></a>

```csharp
public string RepoUrl { get; set; }
```

- *Type:* string

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControlA#repo_url}

---

##### `RollbackEnabled`<sup>Optional</sup> <a name="RollbackEnabled" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.rollbackEnabled"></a>

```csharp
public object RollbackEnabled { get; set; }
```

- *Type:* object

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControlA#rollback_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.timeouts"></a>

```csharp
public AppServiceSourceControlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControlA#timeouts}

---

##### `UseLocalGit`<sup>Optional</sup> <a name="UseLocalGit" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useLocalGit"></a>

```csharp
public object UseLocalGit { get; set; }
```

- *Type:* object

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControlA#use_local_git}

---

##### `UseManualIntegration`<sup>Optional</sup> <a name="UseManualIntegration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useManualIntegration"></a>

```csharp
public object UseManualIntegration { get; set; }
```

- *Type:* object

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControlA#use_manual_integration}

---

##### `UseMercurial`<sup>Optional</sup> <a name="UseMercurial" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlAConfig.property.useMercurial"></a>

```csharp
public object UseMercurial { get; set; }
```

- *Type:* object

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControlA#use_mercurial}

---

### AppServiceSourceControlGithubActionConfiguration <a name="AppServiceSourceControlGithubActionConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlGithubActionConfiguration {
    AppServiceSourceControlGithubActionConfigurationCodeConfiguration CodeConfiguration = null,
    AppServiceSourceControlGithubActionConfigurationContainerConfiguration ContainerConfiguration = null,
    object GenerateWorkflowFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile">GenerateWorkflowFile</a></code> | <code>object</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `CodeConfiguration`<sup>Optional</sup> <a name="CodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration CodeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#code_configuration AppServiceSourceControlA#code_configuration}

---

##### `ContainerConfiguration`<sup>Optional</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration ContainerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#container_configuration AppServiceSourceControlA#container_configuration}

---

##### `GenerateWorkflowFile`<sup>Optional</sup> <a name="GenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile"></a>

```csharp
public object GenerateWorkflowFile { get; set; }
```

- *Type:* object

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#generate_workflow_file AppServiceSourceControlA#generate_workflow_file}

---

### AppServiceSourceControlGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlGithubActionConfigurationCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlGithubActionConfigurationCodeConfiguration {
    string RuntimeStack,
    string RuntimeVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack">RuntimeStack</a></code> | <code>string</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `RuntimeStack`<sup>Required</sup> <a name="RuntimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```csharp
public string RuntimeStack { get; set; }
```

- *Type:* string

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#runtime_stack AppServiceSourceControlA#runtime_stack}

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#runtime_version AppServiceSourceControlA#runtime_version}

---

### AppServiceSourceControlGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlGithubActionConfigurationContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlGithubActionConfigurationContainerConfiguration {
    string ImageName,
    string RegistryUrl,
    string RegistryPassword = null,
    string RegistryUsername = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName">ImageName</a></code> | <code>string</code> | The image name for the build. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | The username used to upload the image to the container registry. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#image_name AppServiceSourceControlA#image_name}

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; set; }
```

- *Type:* string

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#registry_url AppServiceSourceControlA#registry_url}

---

##### `RegistryPassword`<sup>Optional</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; set; }
```

- *Type:* string

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#registry_password AppServiceSourceControlA#registry_password}

---

##### `RegistryUsername`<sup>Optional</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; set; }
```

- *Type:* string

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#registry_username AppServiceSourceControlA#registry_username}

---

### AppServiceSourceControlTimeouts <a name="AppServiceSourceControlTimeouts" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#create AppServiceSourceControlA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#delete AppServiceSourceControlA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/app_service_source_control#read AppServiceSourceControlA#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">RuntimeStackInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">RuntimeStack</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeStackInput`<sup>Optional</sup> <a name="RuntimeStackInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```csharp
public string RuntimeStackInput { get; }
```

- *Type:* string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeStack`<sup>Required</sup> <a name="RuntimeStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```csharp
public string RuntimeStack { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">ResetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">ResetRegistryUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryPassword` <a name="ResetRegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```csharp
private void ResetRegistryPassword()
```

##### `ResetRegistryUsername` <a name="ResetRegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```csharp
private void ResetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">RegistryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">RegistryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">RegistryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">RegistryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">RegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">RegistryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `RegistryPasswordInput`<sup>Optional</sup> <a name="RegistryPasswordInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```csharp
public string RegistryPasswordInput { get; }
```

- *Type:* string

---

##### `RegistryUrlInput`<sup>Optional</sup> <a name="RegistryUrlInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```csharp
public string RegistryUrlInput { get; }
```

- *Type:* string

---

##### `RegistryUsernameInput`<sup>Optional</sup> <a name="RegistryUsernameInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```csharp
public string RegistryUsernameInput { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `RegistryPassword`<sup>Required</sup> <a name="RegistryPassword" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```csharp
public string RegistryPassword { get; }
```

- *Type:* string

---

##### `RegistryUrl`<sup>Required</sup> <a name="RegistryUrl" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```csharp
public string RegistryUrl { get; }
```

- *Type:* string

---

##### `RegistryUsername`<sup>Required</sup> <a name="RegistryUsername" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```csharp
public string RegistryUsername { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlGithubActionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration">PutCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration">PutContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration">ResetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration">ResetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">ResetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeConfiguration` <a name="PutCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```csharp
private void PutCodeConfiguration(AppServiceSourceControlGithubActionConfigurationCodeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `PutContainerConfiguration` <a name="PutContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```csharp
private void PutContainerConfiguration(AppServiceSourceControlGithubActionConfigurationContainerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `ResetCodeConfiguration` <a name="ResetCodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```csharp
private void ResetCodeConfiguration()
```

##### `ResetContainerConfiguration` <a name="ResetContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```csharp
private void ResetContainerConfiguration()
```

##### `ResetGenerateWorkflowFile` <a name="ResetGenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```csharp
private void ResetGenerateWorkflowFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration">CodeConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration">ContainerConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction">LinuxAction</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput">CodeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput">ContainerConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">GenerateWorkflowFileInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile">GenerateWorkflowFile</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeConfiguration`<sup>Required</sup> <a name="CodeConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference CodeConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `ContainerConfiguration`<sup>Required</sup> <a name="ContainerConfiguration" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference ContainerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `LinuxAction`<sup>Required</sup> <a name="LinuxAction" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction"></a>

```csharp
public IResolvable LinuxAction { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CodeConfigurationInput`<sup>Optional</sup> <a name="CodeConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration CodeConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `ContainerConfigurationInput`<sup>Optional</sup> <a name="ContainerConfigurationInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```csharp
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration ContainerConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `GenerateWorkflowFileInput`<sup>Optional</sup> <a name="GenerateWorkflowFileInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```csharp
public object GenerateWorkflowFileInput { get; }
```

- *Type:* object

---

##### `GenerateWorkflowFile`<sup>Required</sup> <a name="GenerateWorkflowFile" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```csharp
public object GenerateWorkflowFile { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue"></a>

```csharp
public AppServiceSourceControlGithubActionConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---


### AppServiceSourceControlTimeoutsOutputReference <a name="AppServiceSourceControlTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceSourceControlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



