# `springCloudJavaDeployment` Submodule <a name="`springCloudJavaDeployment` Submodule" id="@cdktf/provider-azurerm.springCloudJavaDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudJavaDeployment <a name="SpringCloudJavaDeployment" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment azurerm_spring_cloud_java_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudJavaDeployment(Construct Scope, string Id, SpringCloudJavaDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig">SpringCloudJavaDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig">SpringCloudJavaDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetJvmOptions">ResetJvmOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putQuota"></a>

```csharp
private void PutQuota(SpringCloudJavaDeploymentQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudJavaDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a>

---

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetEnvironmentVariables"></a>

```csharp
private void ResetEnvironmentVariables()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetJvmOptions` <a name="ResetJvmOptions" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetJvmOptions"></a>

```csharp
private void ResetJvmOptions()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetRuntimeVersion"></a>

```csharp
private void ResetRuntimeVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudJavaDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudJavaDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudJavaDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudJavaDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudJavaDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudJavaDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudJavaDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudJavaDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudJavaDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference">SpringCloudJavaDeploymentQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference">SpringCloudJavaDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptionsInput">JvmOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppIdInput">SpringCloudAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptions">JvmOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppId">SpringCloudAppId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quota"></a>

```csharp
public SpringCloudJavaDeploymentQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference">SpringCloudJavaDeploymentQuotaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeouts"></a>

```csharp
public SpringCloudJavaDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference">SpringCloudJavaDeploymentTimeoutsOutputReference</a>

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `JvmOptionsInput`<sup>Optional</sup> <a name="JvmOptionsInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptionsInput"></a>

```csharp
public string JvmOptionsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.quotaInput"></a>

```csharp
public SpringCloudJavaDeploymentQuota QuotaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersionInput"></a>

```csharp
public string RuntimeVersionInput { get; }
```

- *Type:* string

---

##### `SpringCloudAppIdInput`<sup>Optional</sup> <a name="SpringCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppIdInput"></a>

```csharp
public string SpringCloudAppIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `JvmOptions`<sup>Required</sup> <a name="JvmOptions" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.jvmOptions"></a>

```csharp
public string JvmOptions { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.springCloudAppId"></a>

```csharp
public string SpringCloudAppId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudJavaDeploymentConfig <a name="SpringCloudJavaDeploymentConfig" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudJavaDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudAppId,
    System.Collections.Generic.IDictionary<string, string> EnvironmentVariables = null,
    string Id = null,
    double InstanceCount = null,
    string JvmOptions = null,
    SpringCloudJavaDeploymentQuota Quota = null,
    string RuntimeVersion = null,
    SpringCloudJavaDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#name SpringCloudJavaDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.springCloudAppId">SpringCloudAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#spring_cloud_app_id SpringCloudJavaDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#environment_variables SpringCloudJavaDeployment#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#id SpringCloudJavaDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#instance_count SpringCloudJavaDeployment#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.jvmOptions">JvmOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#jvm_options SpringCloudJavaDeployment#jvm_options}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#runtime_version SpringCloudJavaDeployment#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#name SpringCloudJavaDeployment#name}.

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.springCloudAppId"></a>

```csharp
public string SpringCloudAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#spring_cloud_app_id SpringCloudJavaDeployment#spring_cloud_app_id}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.environmentVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EnvironmentVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#environment_variables SpringCloudJavaDeployment#environment_variables}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#id SpringCloudJavaDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#instance_count SpringCloudJavaDeployment#instance_count}.

---

##### `JvmOptions`<sup>Optional</sup> <a name="JvmOptions" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.jvmOptions"></a>

```csharp
public string JvmOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#jvm_options SpringCloudJavaDeployment#jvm_options}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.quota"></a>

```csharp
public SpringCloudJavaDeploymentQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#quota SpringCloudJavaDeployment#quota}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#runtime_version SpringCloudJavaDeployment#runtime_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentConfig.property.timeouts"></a>

```csharp
public SpringCloudJavaDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts">SpringCloudJavaDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#timeouts SpringCloudJavaDeployment#timeouts}

---

### SpringCloudJavaDeploymentQuota <a name="SpringCloudJavaDeploymentQuota" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudJavaDeploymentQuota {
    string Cpu = null,
    string Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#cpu SpringCloudJavaDeployment#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#memory SpringCloudJavaDeployment#memory}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#cpu SpringCloudJavaDeployment#cpu}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#memory SpringCloudJavaDeployment#memory}.

---

### SpringCloudJavaDeploymentTimeouts <a name="SpringCloudJavaDeploymentTimeouts" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudJavaDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#create SpringCloudJavaDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#delete SpringCloudJavaDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#read SpringCloudJavaDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#update SpringCloudJavaDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#create SpringCloudJavaDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#delete SpringCloudJavaDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#read SpringCloudJavaDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/spring_cloud_java_deployment#update SpringCloudJavaDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudJavaDeploymentQuotaOutputReference <a name="SpringCloudJavaDeploymentQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudJavaDeploymentQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuotaOutputReference.property.internalValue"></a>

```csharp
public SpringCloudJavaDeploymentQuota InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentQuota">SpringCloudJavaDeploymentQuota</a>

---


### SpringCloudJavaDeploymentTimeoutsOutputReference <a name="SpringCloudJavaDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudJavaDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudJavaDeployment.SpringCloudJavaDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



