# `cognitiveAccountRaiBlocklist` Submodule <a name="`cognitiveAccountRaiBlocklist` Submodule" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountRaiBlocklist <a name="CognitiveAccountRaiBlocklist" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist azurerm_cognitive_account_rai_blocklist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

new cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist(scope: Construct, id: string, config: CognitiveAccountRaiBlocklistConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig">CognitiveAccountRaiBlocklistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig">CognitiveAccountRaiBlocklistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.putTimeouts"></a>

```typescript
public putTimeouts(value: CognitiveAccountRaiBlocklistTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitiveAccountRaiBlocklist resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isConstruct"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformElement"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformResource"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CognitiveAccountRaiBlocklist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountRaiBlocklist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountRaiBlocklist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitiveAccountRaiBlocklist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference">CognitiveAccountRaiBlocklistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.cognitiveAccountIdInput">cognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountRaiBlocklistTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference">CognitiveAccountRaiBlocklistTimeoutsOutputReference</a>

---

##### `cognitiveAccountIdInput`<sup>Optional</sup> <a name="cognitiveAccountIdInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.cognitiveAccountIdInput"></a>

```typescript
public readonly cognitiveAccountIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CognitiveAccountRaiBlocklistTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a>

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklist.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountRaiBlocklistConfig <a name="CognitiveAccountRaiBlocklistConfig" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.Initializer"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

const cognitiveAccountRaiBlocklistConfig: cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#cognitive_account_id CognitiveAccountRaiBlocklist#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#name CognitiveAccountRaiBlocklist#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#description CognitiveAccountRaiBlocklist#description}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#id CognitiveAccountRaiBlocklist#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#cognitive_account_id CognitiveAccountRaiBlocklist#cognitive_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#name CognitiveAccountRaiBlocklist#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#description CognitiveAccountRaiBlocklist#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#id CognitiveAccountRaiBlocklist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountRaiBlocklistTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#timeouts CognitiveAccountRaiBlocklist#timeouts}

---

### CognitiveAccountRaiBlocklistTimeouts <a name="CognitiveAccountRaiBlocklistTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.Initializer"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

const cognitiveAccountRaiBlocklistTimeouts: cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#create CognitiveAccountRaiBlocklist#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#delete CognitiveAccountRaiBlocklist#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#read CognitiveAccountRaiBlocklist#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#update CognitiveAccountRaiBlocklist#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#create CognitiveAccountRaiBlocklist#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#delete CognitiveAccountRaiBlocklist#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#read CognitiveAccountRaiBlocklist#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/cognitive_account_rai_blocklist#update CognitiveAccountRaiBlocklist#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountRaiBlocklistTimeoutsOutputReference <a name="CognitiveAccountRaiBlocklistTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccountRaiBlocklist } from '@cdktf/provider-azurerm'

new cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountRaiBlocklistTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiBlocklist.CognitiveAccountRaiBlocklistTimeouts">CognitiveAccountRaiBlocklistTimeouts</a>

---



