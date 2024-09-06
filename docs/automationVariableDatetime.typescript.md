# `automationVariableDatetime` Submodule <a name="`automationVariableDatetime` Submodule" id="@cdktf/provider-azurerm.automationVariableDatetime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationVariableDatetime <a name="AutomationVariableDatetime" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime azurerm_automation_variable_datetime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

new automationVariableDatetime.AutomationVariableDatetime(scope: Construct, id: string, config: AutomationVariableDatetimeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig">AutomationVariableDatetimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig">AutomationVariableDatetimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.putTimeouts"></a>

```typescript
public putTimeouts(value: AutomationVariableDatetimeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationVariableDatetime resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isConstruct"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

automationVariableDatetime.AutomationVariableDatetime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isTerraformElement"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

automationVariableDatetime.AutomationVariableDatetime.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isTerraformResource"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

automationVariableDatetime.AutomationVariableDatetime.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutomationVariableDatetime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationVariableDatetime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationVariableDatetime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationVariableDatetime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference">AutomationVariableDatetimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.automationAccountNameInput">automationAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationVariableDatetimeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference">AutomationVariableDatetimeTimeoutsOutputReference</a>

---

##### `automationAccountNameInput`<sup>Optional</sup> <a name="automationAccountNameInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.automationAccountNameInput"></a>

```typescript
public readonly automationAccountNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AutomationVariableDatetimeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetime.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationVariableDatetimeConfig <a name="AutomationVariableDatetimeConfig" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.Initializer"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

const automationVariableDatetimeConfig: automationVariableDatetime.AutomationVariableDatetimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.automationAccountName">automationAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#automation_account_name AutomationVariableDatetime#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#name AutomationVariableDatetime#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#resource_group_name AutomationVariableDatetime#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#description AutomationVariableDatetime#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#encrypted AutomationVariableDatetime#encrypted}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#id AutomationVariableDatetime#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#value AutomationVariableDatetime#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automationAccountName`<sup>Required</sup> <a name="automationAccountName" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.automationAccountName"></a>

```typescript
public readonly automationAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#automation_account_name AutomationVariableDatetime#automation_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#name AutomationVariableDatetime#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#resource_group_name AutomationVariableDatetime#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#description AutomationVariableDatetime#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#encrypted AutomationVariableDatetime#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#id AutomationVariableDatetime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AutomationVariableDatetimeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#timeouts AutomationVariableDatetime#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#value AutomationVariableDatetime#value}.

---

### AutomationVariableDatetimeTimeouts <a name="AutomationVariableDatetimeTimeouts" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.Initializer"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

const automationVariableDatetimeTimeouts: automationVariableDatetime.AutomationVariableDatetimeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#create AutomationVariableDatetime#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#delete AutomationVariableDatetime#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#read AutomationVariableDatetime#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#update AutomationVariableDatetime#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#create AutomationVariableDatetime#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#delete AutomationVariableDatetime#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#read AutomationVariableDatetime#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/automation_variable_datetime#update AutomationVariableDatetime#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationVariableDatetimeTimeoutsOutputReference <a name="AutomationVariableDatetimeTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.Initializer"></a>

```typescript
import { automationVariableDatetime } from '@cdktf/provider-azurerm'

new automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AutomationVariableDatetimeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.automationVariableDatetime.AutomationVariableDatetimeTimeouts">AutomationVariableDatetimeTimeouts</a>

---



