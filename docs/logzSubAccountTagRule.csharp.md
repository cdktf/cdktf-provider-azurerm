# `logzSubAccountTagRule` Submodule <a name="`logzSubAccountTagRule` Submodule" id="@cdktf/provider-azurerm.logzSubAccountTagRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogzSubAccountTagRule <a name="LogzSubAccountTagRule" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule azurerm_logz_sub_account_tag_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRule(Construct Scope, string Id, LogzSubAccountTagRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig">LogzSubAccountTagRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig">LogzSubAccountTagRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter">PutTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendAadLogs">ResetSendAadLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendActivityLogs">ResetSendActivityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendSubscriptionLogs">ResetSendSubscriptionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTagFilter">ResetTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTagFilter` <a name="PutTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter"></a>

```csharp
private void PutTagFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTagFilter.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts"></a>

```csharp
private void PutTimeouts(LogzSubAccountTagRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSendAadLogs` <a name="ResetSendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendAadLogs"></a>

```csharp
private void ResetSendAadLogs()
```

##### `ResetSendActivityLogs` <a name="ResetSendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendActivityLogs"></a>

```csharp
private void ResetSendActivityLogs()
```

##### `ResetSendSubscriptionLogs` <a name="ResetSendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetSendSubscriptionLogs"></a>

```csharp
private void ResetSendSubscriptionLogs()
```

##### `ResetTagFilter` <a name="ResetTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTagFilter"></a>

```csharp
private void ResetTagFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogzSubAccountTagRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogzSubAccountTagRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogzSubAccountTagRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogzSubAccountTagRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogzSubAccountTagRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogzSubAccountTagRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogzSubAccountTagRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogzSubAccountTagRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogzSubAccountTagRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList">LogzSubAccountTagRuleTagFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference">LogzSubAccountTagRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountIdInput">LogzSubAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogsInput">SendAadLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogsInput">SendActivityLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogsInput">SendSubscriptionLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilterInput">TagFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountId">LogzSubAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogs">SendAadLogs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogs">SendActivityLogs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogs">SendSubscriptionLogs</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilter"></a>

```csharp
public LogzSubAccountTagRuleTagFilterList TagFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList">LogzSubAccountTagRuleTagFilterList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeouts"></a>

```csharp
public LogzSubAccountTagRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference">LogzSubAccountTagRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogzSubAccountIdInput`<sup>Optional</sup> <a name="LogzSubAccountIdInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountIdInput"></a>

```csharp
public string LogzSubAccountIdInput { get; }
```

- *Type:* string

---

##### `SendAadLogsInput`<sup>Optional</sup> <a name="SendAadLogsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogsInput"></a>

```csharp
public object SendAadLogsInput { get; }
```

- *Type:* object

---

##### `SendActivityLogsInput`<sup>Optional</sup> <a name="SendActivityLogsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogsInput"></a>

```csharp
public object SendActivityLogsInput { get; }
```

- *Type:* object

---

##### `SendSubscriptionLogsInput`<sup>Optional</sup> <a name="SendSubscriptionLogsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogsInput"></a>

```csharp
public object SendSubscriptionLogsInput { get; }
```

- *Type:* object

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tagFilterInput"></a>

```csharp
public object TagFilterInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogzSubAccountId`<sup>Required</sup> <a name="LogzSubAccountId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.logzSubAccountId"></a>

```csharp
public string LogzSubAccountId { get; }
```

- *Type:* string

---

##### `SendAadLogs`<sup>Required</sup> <a name="SendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendAadLogs"></a>

```csharp
public object SendAadLogs { get; }
```

- *Type:* object

---

##### `SendActivityLogs`<sup>Required</sup> <a name="SendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendActivityLogs"></a>

```csharp
public object SendActivityLogs { get; }
```

- *Type:* object

---

##### `SendSubscriptionLogs`<sup>Required</sup> <a name="SendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.sendSubscriptionLogs"></a>

```csharp
public object SendSubscriptionLogs { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogzSubAccountTagRuleConfig <a name="LogzSubAccountTagRuleConfig" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogzSubAccountId,
    string Id = null,
    object SendAadLogs = null,
    object SendActivityLogs = null,
    object SendSubscriptionLogs = null,
    object TagFilter = null,
    LogzSubAccountTagRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.logzSubAccountId">LogzSubAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendAadLogs">SendAadLogs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendActivityLogs">SendActivityLogs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendSubscriptionLogs">SendSubscriptionLogs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.tagFilter">TagFilter</a></code> | <code>object</code> | tag_filter block. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogzSubAccountId`<sup>Required</sup> <a name="LogzSubAccountId" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.logzSubAccountId"></a>

```csharp
public string LogzSubAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#logz_sub_account_id LogzSubAccountTagRule#logz_sub_account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#id LogzSubAccountTagRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SendAadLogs`<sup>Optional</sup> <a name="SendAadLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendAadLogs"></a>

```csharp
public object SendAadLogs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#send_aad_logs LogzSubAccountTagRule#send_aad_logs}.

---

##### `SendActivityLogs`<sup>Optional</sup> <a name="SendActivityLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendActivityLogs"></a>

```csharp
public object SendActivityLogs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#send_activity_logs LogzSubAccountTagRule#send_activity_logs}.

---

##### `SendSubscriptionLogs`<sup>Optional</sup> <a name="SendSubscriptionLogs" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.sendSubscriptionLogs"></a>

```csharp
public object SendSubscriptionLogs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#send_subscription_logs LogzSubAccountTagRule#send_subscription_logs}.

---

##### `TagFilter`<sup>Optional</sup> <a name="TagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.tagFilter"></a>

```csharp
public object TagFilter { get; set; }
```

- *Type:* object

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#tag_filter LogzSubAccountTagRule#tag_filter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleConfig.property.timeouts"></a>

```csharp
public LogzSubAccountTagRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts">LogzSubAccountTagRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#timeouts LogzSubAccountTagRule#timeouts}

---

### LogzSubAccountTagRuleTagFilter <a name="LogzSubAccountTagRuleTagFilter" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRuleTagFilter {
    string Action,
    string Name,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#action LogzSubAccountTagRule#action}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#name LogzSubAccountTagRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#value LogzSubAccountTagRule#value}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#action LogzSubAccountTagRule#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#name LogzSubAccountTagRule#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#value LogzSubAccountTagRule#value}.

---

### LogzSubAccountTagRuleTimeouts <a name="LogzSubAccountTagRuleTimeouts" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#create LogzSubAccountTagRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#delete LogzSubAccountTagRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#read LogzSubAccountTagRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/logz_sub_account_tag_rule#update LogzSubAccountTagRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogzSubAccountTagRuleTagFilterList <a name="LogzSubAccountTagRuleTagFilterList" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRuleTagFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get"></a>

```csharp
private LogzSubAccountTagRuleTagFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogzSubAccountTagRuleTagFilterOutputReference <a name="LogzSubAccountTagRuleTagFilterOutputReference" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRuleTagFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTagFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogzSubAccountTagRuleTimeoutsOutputReference <a name="LogzSubAccountTagRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogzSubAccountTagRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logzSubAccountTagRule.LogzSubAccountTagRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



