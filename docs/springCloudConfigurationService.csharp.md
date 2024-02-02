# `springCloudConfigurationService` Submodule <a name="`springCloudConfigurationService` Submodule" id="@cdktf/provider-azurerm.springCloudConfigurationService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudConfigurationService <a name="SpringCloudConfigurationService" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service azurerm_spring_cloud_configuration_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationService(Construct Scope, string Id, SpringCloudConfigurationServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig">SpringCloudConfigurationServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig">SpringCloudConfigurationServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository">PutRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetGeneration">ResetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRepository` <a name="PutRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository"></a>

```csharp
private void PutRepository(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudConfigurationServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

---

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetGeneration"></a>

```csharp
private void ResetGeneration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudConfigurationService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudConfigurationService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudConfigurationService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudConfigurationService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudConfigurationService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudConfigurationService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudConfigurationService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList">SpringCloudConfigurationServiceRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference">SpringCloudConfigurationServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generationInput">GenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repositoryInput">RepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repository"></a>

```csharp
public SpringCloudConfigurationServiceRepositoryList Repository { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList">SpringCloudConfigurationServiceRepositoryList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeouts"></a>

```csharp
public SpringCloudConfigurationServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference">SpringCloudConfigurationServiceTimeoutsOutputReference</a>

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generationInput"></a>

```csharp
public string GenerationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repositoryInput"></a>

```csharp
public object RepositoryInput { get; }
```

- *Type:* object

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudConfigurationServiceConfig <a name="SpringCloudConfigurationServiceConfig" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudServiceId,
    string Generation = null,
    string Id = null,
    object Repository = null,
    SpringCloudConfigurationServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.generation">Generation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.repository">Repository</a></code> | <code>object</code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}.

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.generation"></a>

```csharp
public string Generation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.repository"></a>

```csharp
public object Repository { get; set; }
```

- *Type:* object

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#repository SpringCloudConfigurationService#repository}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.timeouts"></a>

```csharp
public SpringCloudConfigurationServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#timeouts SpringCloudConfigurationService#timeouts}

---

### SpringCloudConfigurationServiceRepository <a name="SpringCloudConfigurationServiceRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationServiceRepository {
    string Label,
    string Name,
    string[] Patterns,
    string Uri,
    string CaCertificateId = null,
    string HostKey = null,
    string HostKeyAlgorithm = null,
    string Password = null,
    string PrivateKey = null,
    string[] SearchPaths = null,
    object StrictHostKeyChecking = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.patterns">Patterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.caCertificateId">CaCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKey">HostKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.strictHostKeyChecking">StrictHostKeyChecking</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}. |

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `Patterns`<sup>Required</sup> <a name="Patterns" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.patterns"></a>

```csharp
public string[] Patterns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}.

---

##### `CaCertificateId`<sup>Optional</sup> <a name="CaCertificateId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.caCertificateId"></a>

```csharp
public string CaCertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}.

---

##### `HostKey`<sup>Optional</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKey"></a>

```csharp
public string HostKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}.

---

##### `HostKeyAlgorithm`<sup>Optional</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}.

---

##### `SearchPaths`<sup>Optional</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}.

---

##### `StrictHostKeyChecking`<sup>Optional</sup> <a name="StrictHostKeyChecking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.strictHostKeyChecking"></a>

```csharp
public object StrictHostKeyChecking { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}.

---

### SpringCloudConfigurationServiceTimeouts <a name="SpringCloudConfigurationServiceTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudConfigurationServiceRepositoryList <a name="SpringCloudConfigurationServiceRepositoryList" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationServiceRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get"></a>

```csharp
private SpringCloudConfigurationServiceRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudConfigurationServiceRepositoryOutputReference <a name="SpringCloudConfigurationServiceRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationServiceRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetCaCertificateId">ResetCaCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKey">ResetHostKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKeyAlgorithm">ResetHostKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetSearchPaths">ResetSearchPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetStrictHostKeyChecking">ResetStrictHostKeyChecking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificateId` <a name="ResetCaCertificateId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetCaCertificateId"></a>

```csharp
private void ResetCaCertificateId()
```

##### `ResetHostKey` <a name="ResetHostKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKey"></a>

```csharp
private void ResetHostKey()
```

##### `ResetHostKeyAlgorithm` <a name="ResetHostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKeyAlgorithm"></a>

```csharp
private void ResetHostKeyAlgorithm()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetSearchPaths` <a name="ResetSearchPaths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetSearchPaths"></a>

```csharp
private void ResetSearchPaths()
```

##### `ResetStrictHostKeyChecking` <a name="ResetStrictHostKeyChecking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetStrictHostKeyChecking"></a>

```csharp
private void ResetStrictHostKeyChecking()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateIdInput">CaCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithmInput">HostKeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyInput">HostKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patternsInput">PatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPathsInput">SearchPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyCheckingInput">StrictHostKeyCheckingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateId">CaCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patterns">Patterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyChecking">StrictHostKeyChecking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertificateIdInput`<sup>Optional</sup> <a name="CaCertificateIdInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateIdInput"></a>

```csharp
public string CaCertificateIdInput { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithmInput`<sup>Optional</sup> <a name="HostKeyAlgorithmInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithmInput"></a>

```csharp
public string HostKeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `HostKeyInput`<sup>Optional</sup> <a name="HostKeyInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyInput"></a>

```csharp
public string HostKeyInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PatternsInput`<sup>Optional</sup> <a name="PatternsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patternsInput"></a>

```csharp
public string[] PatternsInput { get; }
```

- *Type:* string[]

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `SearchPathsInput`<sup>Optional</sup> <a name="SearchPathsInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPathsInput"></a>

```csharp
public string[] SearchPathsInput { get; }
```

- *Type:* string[]

---

##### `StrictHostKeyCheckingInput`<sup>Optional</sup> <a name="StrictHostKeyCheckingInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyCheckingInput"></a>

```csharp
public object StrictHostKeyCheckingInput { get; }
```

- *Type:* object

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CaCertificateId`<sup>Required</sup> <a name="CaCertificateId" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateId"></a>

```csharp
public string CaCertificateId { get; }
```

- *Type:* string

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Patterns`<sup>Required</sup> <a name="Patterns" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patterns"></a>

```csharp
public string[] Patterns { get; }
```

- *Type:* string[]

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; }
```

- *Type:* string[]

---

##### `StrictHostKeyChecking`<sup>Required</sup> <a name="StrictHostKeyChecking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyChecking"></a>

```csharp
public object StrictHostKeyChecking { get; }
```

- *Type:* object

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SpringCloudConfigurationServiceTimeoutsOutputReference <a name="SpringCloudConfigurationServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudConfigurationServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



