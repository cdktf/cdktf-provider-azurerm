# `webPubsub` Submodule <a name="`webPubsub` Submodule" id="@cdktf/provider-azurerm.webPubsub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsub <a name="WebPubsub" id="@cdktf/provider-azurerm.webPubsub.WebPubsub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub azurerm_web_pubsub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

new webPubsub.WebPubsub(scope: Construct, id: string, config: WebPubsubConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig">WebPubsubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig">WebPubsubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace">putLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled">resetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace">resetLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled">resetTlsClientCertEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity"></a>

```typescript
public putIdentity(value: WebPubsubIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `putLiveTrace` <a name="putLiveTrace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace"></a>

```typescript
public putLiveTrace(value: WebPubsubLiveTrace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts"></a>

```typescript
public putTimeouts(value: WebPubsubTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---

##### `resetAadAuthEnabled` <a name="resetAadAuthEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled"></a>

```typescript
public resetAadAuthEnabled(): void
```

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLiveTrace` <a name="resetLiveTrace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace"></a>

```typescript
public resetLiveTrace(): void
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled"></a>

```typescript
public resetLocalAuthEnabled(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsClientCertEnabled` <a name="resetTlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled"></a>

```typescript
public resetTlsClientCertEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebPubsub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isConstruct"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

webPubsub.WebPubsub.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformElement"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

webPubsub.WebPubsub.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformResource"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

webPubsub.WebPubsub.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

webPubsub.WebPubsub.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WebPubsub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebPubsub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebPubsub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTrace">liveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicPort">publicPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.serverPort">serverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput">aadAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput">liveTraceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.skuInput">skuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput">tlsClientCertEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identity"></a>

```typescript
public readonly identity: WebPubsubIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a>

---

##### `liveTrace`<sup>Required</sup> <a name="liveTrace" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTrace"></a>

```typescript
public readonly liveTrace: WebPubsubLiveTraceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `publicPort`<sup>Required</sup> <a name="publicPort" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicPort"></a>

```typescript
public readonly publicPort: number;
```

- *Type:* number

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `aadAuthEnabledInput`<sup>Optional</sup> <a name="aadAuthEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput"></a>

```typescript
public readonly aadAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.identityInput"></a>

```typescript
public readonly identityInput: WebPubsubIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `liveTraceInput`<sup>Optional</sup> <a name="liveTraceInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput"></a>

```typescript
public readonly liveTraceInput: WebPubsubLiveTrace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput"></a>

```typescript
public readonly localAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.skuInput"></a>

```typescript
public readonly skuInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WebPubsubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---

##### `tlsClientCertEnabledInput`<sup>Optional</sup> <a name="tlsClientCertEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput"></a>

```typescript
public readonly tlsClientCertEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aadAuthEnabled`<sup>Required</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled"></a>

```typescript
public readonly aadAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tlsClientCertEnabled`<sup>Required</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled"></a>

```typescript
public readonly tlsClientCertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubConfig <a name="WebPubsubConfig" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

const webPubsubConfig: webPubsub.WebPubsubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#location WebPubsub#location}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#name WebPubsub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.sku">sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#sku WebPubsub#sku}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#id WebPubsub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace">liveTrace</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#tags WebPubsub#tags}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#location WebPubsub#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#name WebPubsub#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#sku WebPubsub#sku}.

---

##### `aadAuthEnabled`<sup>Optional</sup> <a name="aadAuthEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled"></a>

```typescript
public readonly aadAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#id WebPubsub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.identity"></a>

```typescript
public readonly identity: WebPubsubIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#identity WebPubsub#identity}

---

##### `liveTrace`<sup>Optional</sup> <a name="liveTrace" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace"></a>

```typescript
public readonly liveTrace: WebPubsubLiveTrace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#live_trace WebPubsub#live_trace}

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#tags WebPubsub#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#timeouts WebPubsub#timeouts}

---

##### `tlsClientCertEnabled`<sup>Optional</sup> <a name="tlsClientCertEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled"></a>

```typescript
public readonly tlsClientCertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}.

---

### WebPubsubIdentity <a name="WebPubsubIdentity" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

const webPubsubIdentity: webPubsub.WebPubsubIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#type WebPubsub#type}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#type WebPubsub#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}.

---

### WebPubsubLiveTrace <a name="WebPubsubLiveTrace" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

const webPubsubLiveTrace: webPubsub.WebPubsubLiveTrace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}. |

---

##### `connectivityLogsEnabled`<sup>Optional</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled"></a>

```typescript
public readonly connectivityLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}.

---

##### `httpRequestLogsEnabled`<sup>Optional</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled"></a>

```typescript
public readonly httpRequestLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}.

---

##### `messagingLogsEnabled`<sup>Optional</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled"></a>

```typescript
public readonly messagingLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}.

---

### WebPubsubTimeouts <a name="WebPubsubTimeouts" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

const webPubsubTimeouts: webPubsub.WebPubsubTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#create WebPubsub#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#delete WebPubsub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#read WebPubsub#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#update WebPubsub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#create WebPubsub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#delete WebPubsub#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#read WebPubsub#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/web_pubsub#update WebPubsub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubIdentityOutputReference <a name="WebPubsubIdentityOutputReference" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

new webPubsub.WebPubsubIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WebPubsubIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---


### WebPubsubLiveTraceOutputReference <a name="WebPubsubLiveTraceOutputReference" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

new webPubsub.WebPubsubLiveTraceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled">resetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled">resetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled">resetMessagingLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectivityLogsEnabled` <a name="resetConnectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```typescript
public resetConnectivityLogsEnabled(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHttpRequestLogsEnabled` <a name="resetHttpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```typescript
public resetHttpRequestLogsEnabled(): void
```

##### `resetMessagingLogsEnabled` <a name="resetMessagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```typescript
public resetMessagingLogsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput">connectivityLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput">httpRequestLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput">messagingLogsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled">connectivityLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled">httpRequestLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled">messagingLogsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectivityLogsEnabledInput`<sup>Optional</sup> <a name="connectivityLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```typescript
public readonly connectivityLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpRequestLogsEnabledInput`<sup>Optional</sup> <a name="httpRequestLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```typescript
public readonly httpRequestLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messagingLogsEnabledInput`<sup>Optional</sup> <a name="messagingLogsEnabledInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```typescript
public readonly messagingLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectivityLogsEnabled`<sup>Required</sup> <a name="connectivityLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```typescript
public readonly connectivityLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpRequestLogsEnabled`<sup>Required</sup> <a name="httpRequestLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```typescript
public readonly httpRequestLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messagingLogsEnabled`<sup>Required</sup> <a name="messagingLogsEnabled" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```typescript
public readonly messagingLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WebPubsubLiveTrace;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---


### WebPubsubTimeoutsOutputReference <a name="WebPubsubTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer"></a>

```typescript
import { webPubsub } from '@cdktf/provider-azurerm'

new webPubsub.WebPubsubTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebPubsubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---



