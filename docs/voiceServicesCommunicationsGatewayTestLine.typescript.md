# `voiceServicesCommunicationsGatewayTestLine` Submodule <a name="`voiceServicesCommunicationsGatewayTestLine` Submodule" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VoiceServicesCommunicationsGatewayTestLine <a name="VoiceServicesCommunicationsGatewayTestLine" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line azurerm_voice_services_communications_gateway_test_line}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

new voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine(scope: Construct, id: string, config: VoiceServicesCommunicationsGatewayTestLineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig">VoiceServicesCommunicationsGatewayTestLineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig">VoiceServicesCommunicationsGatewayTestLineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts"></a>

```typescript
public putTimeouts(value: VoiceServicesCommunicationsGatewayTestLineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VoiceServicesCommunicationsGatewayTestLine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VoiceServicesCommunicationsGatewayTestLine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VoiceServicesCommunicationsGatewayTestLine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VoiceServicesCommunicationsGatewayTestLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VoiceServicesCommunicationsGatewayTestLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayIdInput">voiceServicesCommunicationsGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayId">voiceServicesCommunicationsGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeouts"></a>

```typescript
public readonly timeouts: VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VoiceServicesCommunicationsGatewayTestLineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

---

##### `voiceServicesCommunicationsGatewayIdInput`<sup>Optional</sup> <a name="voiceServicesCommunicationsGatewayIdInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayIdInput"></a>

```typescript
public readonly voiceServicesCommunicationsGatewayIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `voiceServicesCommunicationsGatewayId`<sup>Required</sup> <a name="voiceServicesCommunicationsGatewayId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayId"></a>

```typescript
public readonly voiceServicesCommunicationsGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VoiceServicesCommunicationsGatewayTestLineConfig <a name="VoiceServicesCommunicationsGatewayTestLineConfig" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

const voiceServicesCommunicationsGatewayTestLineConfig: voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.purpose">purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.voiceServicesCommunicationsGatewayId">voiceServicesCommunicationsGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}.

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}.

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}.

---

##### `voiceServicesCommunicationsGatewayId`<sup>Required</sup> <a name="voiceServicesCommunicationsGatewayId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.voiceServicesCommunicationsGatewayId"></a>

```typescript
public readonly voiceServicesCommunicationsGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VoiceServicesCommunicationsGatewayTestLineTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#timeouts VoiceServicesCommunicationsGatewayTestLine#timeouts}

---

### VoiceServicesCommunicationsGatewayTestLineTimeouts <a name="VoiceServicesCommunicationsGatewayTestLineTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

const voiceServicesCommunicationsGatewayTestLineTimeouts: voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.24.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference <a name="VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer"></a>

```typescript
import { voiceServicesCommunicationsGatewayTestLine } from '@cdktf/provider-azurerm'

new voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VoiceServicesCommunicationsGatewayTestLineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

---



