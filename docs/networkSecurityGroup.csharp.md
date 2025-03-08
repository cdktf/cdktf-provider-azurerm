# `networkSecurityGroup` Submodule <a name="`networkSecurityGroup` Submodule" id="@cdktf/provider-azurerm.networkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityGroup <a name="NetworkSecurityGroup" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group azurerm_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroup(Construct Scope, string Id, NetworkSecurityGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig">NetworkSecurityGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig">NetworkSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule">PutSecurityRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetSecurityRule">ResetSecurityRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSecurityRule` <a name="PutSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule"></a>

```csharp
private void PutSecurityRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityRule` <a name="ResetSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetSecurityRule"></a>

```csharp
private void ResetSecurityRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkSecurityGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkSecurityGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkSecurityGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkSecurityGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRule">SecurityRule</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList">NetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference">NetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRuleInput">SecurityRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SecurityRule`<sup>Required</sup> <a name="SecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRule"></a>

```csharp
public NetworkSecurityGroupSecurityRuleList SecurityRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList">NetworkSecurityGroupSecurityRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeouts"></a>

```csharp
public NetworkSecurityGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference">NetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityRuleInput`<sup>Optional</sup> <a name="SecurityRuleInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRuleInput"></a>

```csharp
public object SecurityRuleInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityGroupConfig <a name="NetworkSecurityGroupConfig" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroupConfig {
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
    string Id = null,
    object SecurityRule = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkSecurityGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#location NetworkSecurityGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#id NetworkSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.securityRule">SecurityRule</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#location NetworkSecurityGroup#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#id NetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityRule`<sup>Optional</sup> <a name="SecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.securityRule"></a>

```csharp
public object SecurityRule { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.timeouts"></a>

```csharp
public NetworkSecurityGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#timeouts NetworkSecurityGroup#timeouts}

---

### NetworkSecurityGroupSecurityRule <a name="NetworkSecurityGroupSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroupSecurityRule {
    string Access = null,
    string Description = null,
    string DestinationAddressPrefix = null,
    string[] DestinationAddressPrefixes = null,
    string[] DestinationApplicationSecurityGroupIds = null,
    string DestinationPortRange = null,
    string[] DestinationPortRanges = null,
    string Direction = null,
    string Name = null,
    double Priority = null,
    string Protocol = null,
    string SourceAddressPrefix = null,
    string[] SourceAddressPrefixes = null,
    string[] SourceApplicationSecurityGroupIds = null,
    string SourcePortRange = null,
    string[] SourcePortRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.access">Access</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#access NetworkSecurityGroup#access}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#description NetworkSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationApplicationSecurityGroupIds">DestinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRange">DestinationPortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceApplicationSecurityGroupIds">SourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRange">SourcePortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}. |

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#access NetworkSecurityGroup#access}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#description NetworkSecurityGroup#description}.

---

##### `DestinationAddressPrefix`<sup>Optional</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefix"></a>

```csharp
public string DestinationAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}.

---

##### `DestinationAddressPrefixes`<sup>Optional</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefixes"></a>

```csharp
public string[] DestinationAddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}.

---

##### `DestinationApplicationSecurityGroupIds`<sup>Optional</sup> <a name="DestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationApplicationSecurityGroupIds"></a>

```csharp
public string[] DestinationApplicationSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRange"></a>

```csharp
public string DestinationPortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}.

---

##### `DestinationPortRanges`<sup>Optional</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRanges"></a>

```csharp
public string[] DestinationPortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}.

---

##### `SourceAddressPrefix`<sup>Optional</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefix"></a>

```csharp
public string SourceAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}.

---

##### `SourceAddressPrefixes`<sup>Optional</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefixes"></a>

```csharp
public string[] SourceAddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}.

---

##### `SourceApplicationSecurityGroupIds`<sup>Optional</sup> <a name="SourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceApplicationSecurityGroupIds"></a>

```csharp
public string[] SourceApplicationSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRange"></a>

```csharp
public string SourcePortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}.

---

##### `SourcePortRanges`<sup>Optional</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}.

---

### NetworkSecurityGroupTimeouts <a name="NetworkSecurityGroupTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#create NetworkSecurityGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#read NetworkSecurityGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#update NetworkSecurityGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#create NetworkSecurityGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#read NetworkSecurityGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/resources/network_security_group#update NetworkSecurityGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityGroupSecurityRuleList <a name="NetworkSecurityGroupSecurityRuleList" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroupSecurityRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get"></a>

```csharp
private NetworkSecurityGroupSecurityRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkSecurityGroupSecurityRuleOutputReference <a name="NetworkSecurityGroupSecurityRuleOutputReference" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroupSecurityRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefix">ResetDestinationAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefixes">ResetDestinationAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationApplicationSecurityGroupIds">ResetDestinationApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRanges">ResetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefix">ResetSourceAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefixes">ResetSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceApplicationSecurityGroupIds">ResetSourceApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRanges">ResetSourcePortRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDestinationAddressPrefix` <a name="ResetDestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefix"></a>

```csharp
private void ResetDestinationAddressPrefix()
```

##### `ResetDestinationAddressPrefixes` <a name="ResetDestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefixes"></a>

```csharp
private void ResetDestinationAddressPrefixes()
```

##### `ResetDestinationApplicationSecurityGroupIds` <a name="ResetDestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationApplicationSecurityGroupIds"></a>

```csharp
private void ResetDestinationApplicationSecurityGroupIds()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetDestinationPortRanges` <a name="ResetDestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRanges"></a>

```csharp
private void ResetDestinationPortRanges()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSourceAddressPrefix` <a name="ResetSourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefix"></a>

```csharp
private void ResetSourceAddressPrefix()
```

##### `ResetSourceAddressPrefixes` <a name="ResetSourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefixes"></a>

```csharp
private void ResetSourceAddressPrefixes()
```

##### `ResetSourceApplicationSecurityGroupIds` <a name="ResetSourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceApplicationSecurityGroupIds"></a>

```csharp
private void ResetSourceApplicationSecurityGroupIds()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```

##### `ResetSourcePortRanges` <a name="ResetSourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRanges"></a>

```csharp
private void ResetSourcePortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixesInput">DestinationAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixInput">DestinationAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIdsInput">DestinationApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangesInput">DestinationPortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixesInput">SourceAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixInput">SourceAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIdsInput">SourceApplicationSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangesInput">SourcePortRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds">DestinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds">SourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">SourcePortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationAddressPrefixesInput`<sup>Optional</sup> <a name="DestinationAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixesInput"></a>

```csharp
public string[] DestinationAddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `DestinationAddressPrefixInput`<sup>Optional</sup> <a name="DestinationAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixInput"></a>

```csharp
public string DestinationAddressPrefixInput { get; }
```

- *Type:* string

---

##### `DestinationApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="DestinationApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIdsInput"></a>

```csharp
public string[] DestinationApplicationSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangeInput"></a>

```csharp
public string DestinationPortRangeInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangesInput`<sup>Optional</sup> <a name="DestinationPortRangesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangesInput"></a>

```csharp
public string[] DestinationPortRangesInput { get; }
```

- *Type:* string[]

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceAddressPrefixesInput`<sup>Optional</sup> <a name="SourceAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixesInput"></a>

```csharp
public string[] SourceAddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `SourceAddressPrefixInput`<sup>Optional</sup> <a name="SourceAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixInput"></a>

```csharp
public string SourceAddressPrefixInput { get; }
```

- *Type:* string

---

##### `SourceApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="SourceApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIdsInput"></a>

```csharp
public string[] SourceApplicationSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangeInput"></a>

```csharp
public string SourcePortRangeInput { get; }
```

- *Type:* string

---

##### `SourcePortRangesInput`<sup>Optional</sup> <a name="SourcePortRangesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangesInput"></a>

```csharp
public string[] SourcePortRangesInput { get; }
```

- *Type:* string[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationAddressPrefix`<sup>Required</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```csharp
public string DestinationAddressPrefix { get; }
```

- *Type:* string

---

##### `DestinationAddressPrefixes`<sup>Required</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```csharp
public string[] DestinationAddressPrefixes { get; }
```

- *Type:* string[]

---

##### `DestinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="DestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds"></a>

```csharp
public string[] DestinationApplicationSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```csharp
public string DestinationPortRange { get; }
```

- *Type:* string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```csharp
public string[] DestinationPortRanges { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```csharp
public string SourceAddressPrefix { get; }
```

- *Type:* string

---

##### `SourceAddressPrefixes`<sup>Required</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```csharp
public string[] SourceAddressPrefixes { get; }
```

- *Type:* string[]

---

##### `SourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="SourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds"></a>

```csharp
public string[] SourceApplicationSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```csharp
public string SourcePortRange { get; }
```

- *Type:* string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```csharp
public string[] SourcePortRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkSecurityGroupTimeoutsOutputReference <a name="NetworkSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkSecurityGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



