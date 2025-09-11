# `streamAnalyticsOutputPowerbi` Submodule <a name="`streamAnalyticsOutputPowerbi` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputPowerbi <a name="StreamAnalyticsOutputPowerbi" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi azurerm_stream_analytics_output_powerbi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi(scope: Construct, id: string, config: StreamAnalyticsOutputPowerbiConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig">StreamAnalyticsOutputPowerbiConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig">StreamAnalyticsOutputPowerbiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetTokenUserDisplayName">resetTokenUserDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetTokenUserPrincipalName">resetTokenUserPrincipalName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamAnalyticsOutputPowerbiTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenUserDisplayName` <a name="resetTokenUserDisplayName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetTokenUserDisplayName"></a>

```typescript
public resetTokenUserDisplayName(): void
```

##### `resetTokenUserPrincipalName` <a name="resetTokenUserPrincipalName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.resetTokenUserPrincipalName"></a>

```typescript
public resetTokenUserPrincipalName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputPowerbi resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isConstruct"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformElement"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformResource"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamAnalyticsOutputPowerbi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsOutputPowerbi to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsOutputPowerbi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputPowerbi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference">StreamAnalyticsOutputPowerbiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.streamAnalyticsJobIdInput">streamAnalyticsJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserDisplayNameInput">tokenUserDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserPrincipalNameInput">tokenUserPrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserDisplayName">tokenUserDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserPrincipalName">tokenUserPrincipalName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputPowerbiTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference">StreamAnalyticsOutputPowerbiTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamAnalyticsJobIdInput`<sup>Optional</sup> <a name="streamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.streamAnalyticsJobIdInput"></a>

```typescript
public readonly streamAnalyticsJobIdInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamAnalyticsOutputPowerbiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a>

---

##### `tokenUserDisplayNameInput`<sup>Optional</sup> <a name="tokenUserDisplayNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserDisplayNameInput"></a>

```typescript
public readonly tokenUserDisplayNameInput: string;
```

- *Type:* string

---

##### `tokenUserPrincipalNameInput`<sup>Optional</sup> <a name="tokenUserPrincipalNameInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserPrincipalNameInput"></a>

```typescript
public readonly tokenUserPrincipalNameInput: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.streamAnalyticsJobId"></a>

```typescript
public readonly streamAnalyticsJobId: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `tokenUserDisplayName`<sup>Required</sup> <a name="tokenUserDisplayName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserDisplayName"></a>

```typescript
public readonly tokenUserDisplayName: string;
```

- *Type:* string

---

##### `tokenUserPrincipalName`<sup>Required</sup> <a name="tokenUserPrincipalName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tokenUserPrincipalName"></a>

```typescript
public readonly tokenUserPrincipalName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbi.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputPowerbiConfig <a name="StreamAnalyticsOutputPowerbiConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.Initializer"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputPowerbiConfig: streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.dataset">dataset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#dataset StreamAnalyticsOutputPowerbi#dataset}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#group_id StreamAnalyticsOutputPowerbi#group_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#group_name StreamAnalyticsOutputPowerbi#group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#name StreamAnalyticsOutputPowerbi#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.streamAnalyticsJobId">streamAnalyticsJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#stream_analytics_job_id StreamAnalyticsOutputPowerbi#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.table">table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#table StreamAnalyticsOutputPowerbi#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#id StreamAnalyticsOutputPowerbi#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.tokenUserDisplayName">tokenUserDisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#token_user_display_name StreamAnalyticsOutputPowerbi#token_user_display_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.tokenUserPrincipalName">tokenUserPrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#token_user_principal_name StreamAnalyticsOutputPowerbi#token_user_principal_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#dataset StreamAnalyticsOutputPowerbi#dataset}.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#group_id StreamAnalyticsOutputPowerbi#group_id}.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#group_name StreamAnalyticsOutputPowerbi#group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#name StreamAnalyticsOutputPowerbi#name}.

---

##### `streamAnalyticsJobId`<sup>Required</sup> <a name="streamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.streamAnalyticsJobId"></a>

```typescript
public readonly streamAnalyticsJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#stream_analytics_job_id StreamAnalyticsOutputPowerbi#stream_analytics_job_id}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#table StreamAnalyticsOutputPowerbi#table}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#id StreamAnalyticsOutputPowerbi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamAnalyticsOutputPowerbiTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#timeouts StreamAnalyticsOutputPowerbi#timeouts}

---

##### `tokenUserDisplayName`<sup>Optional</sup> <a name="tokenUserDisplayName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.tokenUserDisplayName"></a>

```typescript
public readonly tokenUserDisplayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#token_user_display_name StreamAnalyticsOutputPowerbi#token_user_display_name}.

---

##### `tokenUserPrincipalName`<sup>Optional</sup> <a name="tokenUserPrincipalName" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiConfig.property.tokenUserPrincipalName"></a>

```typescript
public readonly tokenUserPrincipalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#token_user_principal_name StreamAnalyticsOutputPowerbi#token_user_principal_name}.

---

### StreamAnalyticsOutputPowerbiTimeouts <a name="StreamAnalyticsOutputPowerbiTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.Initializer"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

const streamAnalyticsOutputPowerbiTimeouts: streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#create StreamAnalyticsOutputPowerbi#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#delete StreamAnalyticsOutputPowerbi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#read StreamAnalyticsOutputPowerbi#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#update StreamAnalyticsOutputPowerbi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#create StreamAnalyticsOutputPowerbi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#delete StreamAnalyticsOutputPowerbi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#read StreamAnalyticsOutputPowerbi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stream_analytics_output_powerbi#update StreamAnalyticsOutputPowerbi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputPowerbiTimeoutsOutputReference <a name="StreamAnalyticsOutputPowerbiTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamAnalyticsOutputPowerbi } from '@cdktf/provider-azurerm'

new streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamAnalyticsOutputPowerbiTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputPowerbi.StreamAnalyticsOutputPowerbiTimeouts">StreamAnalyticsOutputPowerbiTimeouts</a>

---



