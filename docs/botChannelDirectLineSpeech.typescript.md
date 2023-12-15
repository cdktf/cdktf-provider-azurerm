# `botChannelDirectLineSpeech` Submodule <a name="`botChannelDirectLineSpeech` Submodule" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectLineSpeech <a name="BotChannelDirectLineSpeech" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech azurerm_bot_channel_direct_line_speech}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

new botChannelDirectLineSpeech.BotChannelDirectLineSpeech(scope: Construct, id: string, config: BotChannelDirectLineSpeechConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig">BotChannelDirectLineSpeechConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig">BotChannelDirectLineSpeechConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId">resetCognitiveAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId">resetCustomSpeechModelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId">resetCustomVoiceDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts"></a>

```typescript
public putTimeouts(value: BotChannelDirectLineSpeechTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---

##### `resetCognitiveAccountId` <a name="resetCognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId"></a>

```typescript
public resetCognitiveAccountId(): void
```

##### `resetCustomSpeechModelId` <a name="resetCustomSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId"></a>

```typescript
public resetCustomSpeechModelId(): void
```

##### `resetCustomVoiceDeploymentId` <a name="resetCustomVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId"></a>

```typescript
public resetCustomVoiceDeploymentId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BotChannelDirectLineSpeech to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BotChannelDirectLineSpeech that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelDirectLineSpeech to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput">botNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput">cognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput">cognitiveServiceAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput">cognitiveServiceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput">customSpeechModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput">customVoiceDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName">botName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey">cognitiveServiceAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation">cognitiveServiceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId">customSpeechModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId">customVoiceDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts"></a>

```typescript
public readonly timeouts: BotChannelDirectLineSpeechTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a>

---

##### `botNameInput`<sup>Optional</sup> <a name="botNameInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput"></a>

```typescript
public readonly botNameInput: string;
```

- *Type:* string

---

##### `cognitiveAccountIdInput`<sup>Optional</sup> <a name="cognitiveAccountIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput"></a>

```typescript
public readonly cognitiveAccountIdInput: string;
```

- *Type:* string

---

##### `cognitiveServiceAccessKeyInput`<sup>Optional</sup> <a name="cognitiveServiceAccessKeyInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput"></a>

```typescript
public readonly cognitiveServiceAccessKeyInput: string;
```

- *Type:* string

---

##### `cognitiveServiceLocationInput`<sup>Optional</sup> <a name="cognitiveServiceLocationInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput"></a>

```typescript
public readonly cognitiveServiceLocationInput: string;
```

- *Type:* string

---

##### `customSpeechModelIdInput`<sup>Optional</sup> <a name="customSpeechModelIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput"></a>

```typescript
public readonly customSpeechModelIdInput: string;
```

- *Type:* string

---

##### `customVoiceDeploymentIdInput`<sup>Optional</sup> <a name="customVoiceDeploymentIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput"></a>

```typescript
public readonly customVoiceDeploymentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BotChannelDirectLineSpeechTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

---

##### `cognitiveAccountId`<sup>Required</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

---

##### `cognitiveServiceAccessKey`<sup>Required</sup> <a name="cognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey"></a>

```typescript
public readonly cognitiveServiceAccessKey: string;
```

- *Type:* string

---

##### `cognitiveServiceLocation`<sup>Required</sup> <a name="cognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation"></a>

```typescript
public readonly cognitiveServiceLocation: string;
```

- *Type:* string

---

##### `customSpeechModelId`<sup>Required</sup> <a name="customSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId"></a>

```typescript
public readonly customSpeechModelId: string;
```

- *Type:* string

---

##### `customVoiceDeploymentId`<sup>Required</sup> <a name="customVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId"></a>

```typescript
public readonly customVoiceDeploymentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectLineSpeechConfig <a name="BotChannelDirectLineSpeechConfig" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.Initializer"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

const botChannelDirectLineSpeechConfig: botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName">botName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey">cognitiveServiceAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation">cognitiveServiceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId">cognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId">customSpeechModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId">customVoiceDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}.

---

##### `cognitiveServiceAccessKey`<sup>Required</sup> <a name="cognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey"></a>

```typescript
public readonly cognitiveServiceAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}.

---

##### `cognitiveServiceLocation`<sup>Required</sup> <a name="cognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation"></a>

```typescript
public readonly cognitiveServiceLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}.

---

##### `cognitiveAccountId`<sup>Optional</sup> <a name="cognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId"></a>

```typescript
public readonly cognitiveAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}.

---

##### `customSpeechModelId`<sup>Optional</sup> <a name="customSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId"></a>

```typescript
public readonly customSpeechModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}.

---

##### `customVoiceDeploymentId`<sup>Optional</sup> <a name="customVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId"></a>

```typescript
public readonly customVoiceDeploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BotChannelDirectLineSpeechTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}

---

### BotChannelDirectLineSpeechTimeouts <a name="BotChannelDirectLineSpeechTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.Initializer"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

const botChannelDirectLineSpeechTimeouts: botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectLineSpeechTimeoutsOutputReference <a name="BotChannelDirectLineSpeechTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer"></a>

```typescript
import { botChannelDirectLineSpeech } from '@cdktf/provider-azurerm'

new botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BotChannelDirectLineSpeechTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---



