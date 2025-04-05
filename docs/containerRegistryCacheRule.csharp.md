# `containerRegistryCacheRule` Submodule <a name="`containerRegistryCacheRule` Submodule" id="@cdktf/provider-azurerm.containerRegistryCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryCacheRule <a name="ContainerRegistryCacheRule" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule azurerm_container_registry_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryCacheRule(Construct Scope, string Id, ContainerRegistryCacheRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig">ContainerRegistryCacheRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig">ContainerRegistryCacheRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetCredentialSetId">ResetCredentialSetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ContainerRegistryCacheRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts">ContainerRegistryCacheRuleTimeouts</a>

---

##### `ResetCredentialSetId` <a name="ResetCredentialSetId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetCredentialSetId"></a>

```csharp
private void ResetCredentialSetId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryCacheRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryCacheRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryCacheRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryCacheRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ContainerRegistryCacheRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerRegistryCacheRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryCacheRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference">ContainerRegistryCacheRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.containerRegistryIdInput">ContainerRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.credentialSetIdInput">CredentialSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.sourceRepoInput">SourceRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.targetRepoInput">TargetRepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.containerRegistryId">ContainerRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.credentialSetId">CredentialSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.sourceRepo">SourceRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.targetRepo">TargetRepo</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.timeouts"></a>

```csharp
public ContainerRegistryCacheRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference">ContainerRegistryCacheRuleTimeoutsOutputReference</a>

---

##### `ContainerRegistryIdInput`<sup>Optional</sup> <a name="ContainerRegistryIdInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.containerRegistryIdInput"></a>

```csharp
public string ContainerRegistryIdInput { get; }
```

- *Type:* string

---

##### `CredentialSetIdInput`<sup>Optional</sup> <a name="CredentialSetIdInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.credentialSetIdInput"></a>

```csharp
public string CredentialSetIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceRepoInput`<sup>Optional</sup> <a name="SourceRepoInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.sourceRepoInput"></a>

```csharp
public string SourceRepoInput { get; }
```

- *Type:* string

---

##### `TargetRepoInput`<sup>Optional</sup> <a name="TargetRepoInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.targetRepoInput"></a>

```csharp
public string TargetRepoInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.containerRegistryId"></a>

```csharp
public string ContainerRegistryId { get; }
```

- *Type:* string

---

##### `CredentialSetId`<sup>Required</sup> <a name="CredentialSetId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.credentialSetId"></a>

```csharp
public string CredentialSetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceRepo`<sup>Required</sup> <a name="SourceRepo" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.sourceRepo"></a>

```csharp
public string SourceRepo { get; }
```

- *Type:* string

---

##### `TargetRepo`<sup>Required</sup> <a name="TargetRepo" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.targetRepo"></a>

```csharp
public string TargetRepo { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryCacheRuleConfig <a name="ContainerRegistryCacheRuleConfig" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryCacheRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerRegistryId,
    string Name,
    string SourceRepo,
    string TargetRepo,
    string CredentialSetId = null,
    string Id = null,
    ContainerRegistryCacheRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.containerRegistryId">ContainerRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#container_registry_id ContainerRegistryCacheRule#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the cache rule. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.sourceRepo">SourceRepo</a></code> | <code>string</code> | The full source repository path such as 'docker.io/library/ubuntu'. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.targetRepo">TargetRepo</a></code> | <code>string</code> | The target repository namespace such as 'ubuntu'. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.credentialSetId">CredentialSetId</a></code> | <code>string</code> | The ARM resource ID of the credential store which is associated with the cache rule. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#id ContainerRegistryCacheRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts">ContainerRegistryCacheRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerRegistryId`<sup>Required</sup> <a name="ContainerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.containerRegistryId"></a>

```csharp
public string ContainerRegistryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#container_registry_id ContainerRegistryCacheRule#container_registry_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#name ContainerRegistryCacheRule#name}

---

##### `SourceRepo`<sup>Required</sup> <a name="SourceRepo" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.sourceRepo"></a>

```csharp
public string SourceRepo { get; set; }
```

- *Type:* string

The full source repository path such as 'docker.io/library/ubuntu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#source_repo ContainerRegistryCacheRule#source_repo}

---

##### `TargetRepo`<sup>Required</sup> <a name="TargetRepo" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.targetRepo"></a>

```csharp
public string TargetRepo { get; set; }
```

- *Type:* string

The target repository namespace such as 'ubuntu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#target_repo ContainerRegistryCacheRule#target_repo}

---

##### `CredentialSetId`<sup>Optional</sup> <a name="CredentialSetId" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.credentialSetId"></a>

```csharp
public string CredentialSetId { get; set; }
```

- *Type:* string

The ARM resource ID of the credential store which is associated with the cache rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#credential_set_id ContainerRegistryCacheRule#credential_set_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#id ContainerRegistryCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleConfig.property.timeouts"></a>

```csharp
public ContainerRegistryCacheRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts">ContainerRegistryCacheRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#timeouts ContainerRegistryCacheRule#timeouts}

---

### ContainerRegistryCacheRuleTimeouts <a name="ContainerRegistryCacheRuleTimeouts" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryCacheRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#create ContainerRegistryCacheRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#delete ContainerRegistryCacheRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#read ContainerRegistryCacheRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#update ContainerRegistryCacheRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#create ContainerRegistryCacheRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#delete ContainerRegistryCacheRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#read ContainerRegistryCacheRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/container_registry_cache_rule#update ContainerRegistryCacheRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryCacheRuleTimeoutsOutputReference <a name="ContainerRegistryCacheRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ContainerRegistryCacheRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.containerRegistryCacheRule.ContainerRegistryCacheRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



