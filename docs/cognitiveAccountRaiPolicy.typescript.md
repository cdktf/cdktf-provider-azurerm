# `cognitiveAccountRaiPolicy` Submodule <a name="`cognitiveAccountRaiPolicy` Submodule" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccountRaiPolicy <a name="CognitiveAccountRaiPolicy" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy azurerm_cognitive_account_rai_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

new cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy(scope: Construct, id: string, config: CognitiveAccountRaiPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig">CognitiveAccountRaiPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig">CognitiveAccountRaiPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putContentFilter">putContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentFilter` <a name="putContentFilter" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putContentFilter"></a>

```typescript
public putContentFilter(value: IResolvable | CognitiveAccountRaiPolicyContentFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putContentFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: CognitiveAccountRaiPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitiveAccountRaiPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CognitiveAccountRaiPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitiveAccountRaiPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitiveAccountRaiPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitiveAccountRaiPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList">CognitiveAccountRaiPolicyContentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference">CognitiveAccountRaiPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyNameInput">basePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountIdInput">cognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilterInput">contentFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyName">basePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentFilter`<sup>Required</sup> <a name="contentFilter" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilter"></a>

```typescript
public readonly contentFilter: CognitiveAccountRaiPolicyContentFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList">CognitiveAccountRaiPolicyContentFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountRaiPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference">CognitiveAccountRaiPolicyTimeoutsOutputReference</a>

---

##### `basePolicyNameInput`<sup>Optional</sup> <a name="basePolicyNameInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyNameInput"></a>

```typescript
public readonly basePolicyNameInput: string;
```

- *Type:* string

---

##### `cognitiveAccountIdInput`<sup>Optional</sup> <a name="cognitiveAccountIdInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountIdInput"></a>

```typescript
public readonly cognitiveAccountIdInput: string;
```

- *Type:* string

---

##### `contentFilterInput`<sup>Optional</sup> <a name="contentFilterInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.contentFilterInput"></a>

```typescript
public readonly contentFilterInput: IResolvable | CognitiveAccountRaiPolicyContentFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CognitiveAccountRaiPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

---

##### `basePolicyName`<sup>Required</sup> <a name="basePolicyName" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.basePolicyName"></a>

```typescript
public readonly basePolicyName: string;
```

- *Type:* string

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountRaiPolicyConfig <a name="CognitiveAccountRaiPolicyConfig" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

const cognitiveAccountRaiPolicyConfig: cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.basePolicyName">basePolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#base_policy_name CognitiveAccountRaiPolicy#base_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#cognitive_account_id CognitiveAccountRaiPolicy#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.contentFilter">contentFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]</code> | content_filter block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#id CognitiveAccountRaiPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#mode CognitiveAccountRaiPolicy#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#tags CognitiveAccountRaiPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `basePolicyName`<sup>Required</sup> <a name="basePolicyName" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.basePolicyName"></a>

```typescript
public readonly basePolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#base_policy_name CognitiveAccountRaiPolicy#base_policy_name}.

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#cognitive_account_id CognitiveAccountRaiPolicy#cognitive_account_id}.

---

##### `contentFilter`<sup>Required</sup> <a name="contentFilter" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.contentFilter"></a>

```typescript
public readonly contentFilter: IResolvable | CognitiveAccountRaiPolicyContentFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#content_filter CognitiveAccountRaiPolicy#content_filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#id CognitiveAccountRaiPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#mode CognitiveAccountRaiPolicy#mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#tags CognitiveAccountRaiPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CognitiveAccountRaiPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#timeouts CognitiveAccountRaiPolicy#timeouts}

---

### CognitiveAccountRaiPolicyContentFilter <a name="CognitiveAccountRaiPolicyContentFilter" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

const cognitiveAccountRaiPolicyContentFilter: cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.blockEnabled">blockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#block_enabled CognitiveAccountRaiPolicy#block_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.filterEnabled">filterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#filter_enabled CognitiveAccountRaiPolicy#filter_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#severity_threshold CognitiveAccountRaiPolicy#severity_threshold}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#source CognitiveAccountRaiPolicy#source}. |

---

##### `blockEnabled`<sup>Required</sup> <a name="blockEnabled" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.blockEnabled"></a>

```typescript
public readonly blockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#block_enabled CognitiveAccountRaiPolicy#block_enabled}.

---

##### `filterEnabled`<sup>Required</sup> <a name="filterEnabled" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.filterEnabled"></a>

```typescript
public readonly filterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#filter_enabled CognitiveAccountRaiPolicy#filter_enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#name CognitiveAccountRaiPolicy#name}.

---

##### `severityThreshold`<sup>Required</sup> <a name="severityThreshold" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#severity_threshold CognitiveAccountRaiPolicy#severity_threshold}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#source CognitiveAccountRaiPolicy#source}.

---

### CognitiveAccountRaiPolicyTimeouts <a name="CognitiveAccountRaiPolicyTimeouts" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

const cognitiveAccountRaiPolicyTimeouts: cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#create CognitiveAccountRaiPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#delete CognitiveAccountRaiPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#read CognitiveAccountRaiPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#update CognitiveAccountRaiPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#create CognitiveAccountRaiPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#delete CognitiveAccountRaiPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#read CognitiveAccountRaiPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.33.0/docs/resources/cognitive_account_rai_policy#update CognitiveAccountRaiPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountRaiPolicyContentFilterList <a name="CognitiveAccountRaiPolicyContentFilterList" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

new cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.get"></a>

```typescript
public get(index: number): CognitiveAccountRaiPolicyContentFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountRaiPolicyContentFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>[]

---


### CognitiveAccountRaiPolicyContentFilterOutputReference <a name="CognitiveAccountRaiPolicyContentFilterOutputReference" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

new cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabledInput">blockEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabledInput">filterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThresholdInput">severityThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabled">blockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabled">filterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThreshold">severityThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockEnabledInput`<sup>Optional</sup> <a name="blockEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabledInput"></a>

```typescript
public readonly blockEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterEnabledInput`<sup>Optional</sup> <a name="filterEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabledInput"></a>

```typescript
public readonly filterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `severityThresholdInput`<sup>Optional</sup> <a name="severityThresholdInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThresholdInput"></a>

```typescript
public readonly severityThresholdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `blockEnabled`<sup>Required</sup> <a name="blockEnabled" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.blockEnabled"></a>

```typescript
public readonly blockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterEnabled`<sup>Required</sup> <a name="filterEnabled" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.filterEnabled"></a>

```typescript
public readonly filterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `severityThreshold`<sup>Required</sup> <a name="severityThreshold" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.severityThreshold"></a>

```typescript
public readonly severityThreshold: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountRaiPolicyContentFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyContentFilter">CognitiveAccountRaiPolicyContentFilter</a>

---


### CognitiveAccountRaiPolicyTimeoutsOutputReference <a name="CognitiveAccountRaiPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { cognitiveAccountRaiPolicy } from '@cdktf/provider-azurerm'

new cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitiveAccountRaiPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cognitiveAccountRaiPolicy.CognitiveAccountRaiPolicyTimeouts">CognitiveAccountRaiPolicyTimeouts</a>

---



