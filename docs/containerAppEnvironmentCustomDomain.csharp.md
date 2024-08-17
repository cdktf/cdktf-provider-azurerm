# `containerAppEnvironmentCustomDomain` Submodule <a name="`containerAppEnvironmentCustomDomain` Submodule" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentCustomDomain <a name="ContainerAppEnvironmentCustomDomain" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain azurerm_container_app_environment_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentCustomDomain(Construct Scope, string Id, ContainerAppEnvironmentCustomDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig">ContainerAppEnvironmentCustomDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig">ContainerAppEnvironmentCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerAppEnvironmentCustomDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAppEnvironmentCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentCustomDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentCustomDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentCustomDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerAppEnvironmentCustomDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAppEnvironmentCustomDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAppEnvironmentCustomDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAppEnvironmentCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference">ContainerAppEnvironmentCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64Input">CertificateBlobBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePasswordInput">CertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffixInput">DnsSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64">CertificateBlobBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffix">DnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeouts"></a>

```csharp
public ContainerAppEnvironmentCustomDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference">ContainerAppEnvironmentCustomDomainTimeoutsOutputReference</a>

---

##### `CertificateBlobBase64Input`<sup>Optional</sup> <a name="CertificateBlobBase64Input" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64Input"></a>

```csharp
public string CertificateBlobBase64Input { get; }
```

- *Type:* string

---

##### `CertificatePasswordInput`<sup>Optional</sup> <a name="CertificatePasswordInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePasswordInput"></a>

```csharp
public string CertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentIdInput"></a>

```csharp
public string ContainerAppEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `DnsSuffixInput`<sup>Optional</sup> <a name="DnsSuffixInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffixInput"></a>

```csharp
public string DnsSuffixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CertificateBlobBase64`<sup>Required</sup> <a name="CertificateBlobBase64" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificateBlobBase64"></a>

```csharp
public string CertificateBlobBase64 { get; }
```

- *Type:* string

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; }
```

- *Type:* string

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; }
```

- *Type:* string

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.dnsSuffix"></a>

```csharp
public string DnsSuffix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentCustomDomainConfig <a name="ContainerAppEnvironmentCustomDomainConfig" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentCustomDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateBlobBase64,
    string CertificatePassword,
    string ContainerAppEnvironmentId,
    string DnsSuffix,
    string Id = null,
    ContainerAppEnvironmentCustomDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificateBlobBase64">CertificateBlobBase64</a></code> | <code>string</code> | The Custom Domain Certificate Private Key as a base64 encoded PFX or PEM. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificatePassword">CertificatePassword</a></code> | <code>string</code> | The Custom Domain Certificate password. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | The Container App Managed Environment ID to configure this Custom Domain on. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dnsSuffix">DnsSuffix</a></code> | <code>string</code> | The Custom Domain DNS suffix for this Container App Environment. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#id ContainerAppEnvironmentCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateBlobBase64`<sup>Required</sup> <a name="CertificateBlobBase64" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificateBlobBase64"></a>

```csharp
public string CertificateBlobBase64 { get; set; }
```

- *Type:* string

The Custom Domain Certificate Private Key as a base64 encoded PFX or PEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#certificate_blob_base64 ContainerAppEnvironmentCustomDomain#certificate_blob_base64}

---

##### `CertificatePassword`<sup>Required</sup> <a name="CertificatePassword" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.certificatePassword"></a>

```csharp
public string CertificatePassword { get; set; }
```

- *Type:* string

The Custom Domain Certificate password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#certificate_password ContainerAppEnvironmentCustomDomain#certificate_password}

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; set; }
```

- *Type:* string

The Container App Managed Environment ID to configure this Custom Domain on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#container_app_environment_id ContainerAppEnvironmentCustomDomain#container_app_environment_id}

---

##### `DnsSuffix`<sup>Required</sup> <a name="DnsSuffix" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.dnsSuffix"></a>

```csharp
public string DnsSuffix { get; set; }
```

- *Type:* string

The Custom Domain DNS suffix for this Container App Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#dns_suffix ContainerAppEnvironmentCustomDomain#dns_suffix}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#id ContainerAppEnvironmentCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainConfig.property.timeouts"></a>

```csharp
public ContainerAppEnvironmentCustomDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts">ContainerAppEnvironmentCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#timeouts ContainerAppEnvironmentCustomDomain#timeouts}

---

### ContainerAppEnvironmentCustomDomainTimeouts <a name="ContainerAppEnvironmentCustomDomainTimeouts" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentCustomDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#create ContainerAppEnvironmentCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#delete ContainerAppEnvironmentCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#read ContainerAppEnvironmentCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#update ContainerAppEnvironmentCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#create ContainerAppEnvironmentCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#delete ContainerAppEnvironmentCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#read ContainerAppEnvironmentCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/container_app_environment_custom_domain#update ContainerAppEnvironmentCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentCustomDomainTimeoutsOutputReference <a name="ContainerAppEnvironmentCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerAppEnvironmentCustomDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerAppEnvironmentCustomDomain.ContainerAppEnvironmentCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



