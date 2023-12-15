# `cdnEndpointCustomDomain` Submodule <a name="`cdnEndpointCustomDomain` Submodule" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnEndpointCustomDomain <a name="CdnEndpointCustomDomain" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain azurerm_cdn_endpoint_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

new cdnEndpointCustomDomain.CdnEndpointCustomDomain(scope: Construct, id: string, config: CdnEndpointCustomDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig">CdnEndpointCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig">CdnEndpointCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps">putCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps">putUserManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetCdnManagedHttps">resetCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetUserManagedHttps">resetUserManagedHttps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdnManagedHttps` <a name="putCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps"></a>

```typescript
public putCdnManagedHttps(value: CdnEndpointCustomDomainCdnManagedHttps): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putCdnManagedHttps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnEndpointCustomDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

---

##### `putUserManagedHttps` <a name="putUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps"></a>

```typescript
public putUserManagedHttps(value: CdnEndpointCustomDomainUserManagedHttps): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.putUserManagedHttps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---

##### `resetCdnManagedHttps` <a name="resetCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetCdnManagedHttps"></a>

```typescript
public resetCdnManagedHttps(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserManagedHttps` <a name="resetUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.resetUserManagedHttps"></a>

```typescript
public resetUserManagedHttps(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CdnEndpointCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnEndpointCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnEndpointCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnEndpointCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttps">cdnManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference">CdnEndpointCustomDomainCdnManagedHttpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference">CdnEndpointCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttps">userManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference">CdnEndpointCustomDomainUserManagedHttpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointIdInput">cdnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttpsInput">cdnManagedHttpsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttpsInput">userManagedHttpsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointId">cdnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnManagedHttps`<sup>Required</sup> <a name="cdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttps"></a>

```typescript
public readonly cdnManagedHttps: CdnEndpointCustomDomainCdnManagedHttpsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference">CdnEndpointCustomDomainCdnManagedHttpsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeouts"></a>

```typescript
public readonly timeouts: CdnEndpointCustomDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference">CdnEndpointCustomDomainTimeoutsOutputReference</a>

---

##### `userManagedHttps`<sup>Required</sup> <a name="userManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttps"></a>

```typescript
public readonly userManagedHttps: CdnEndpointCustomDomainUserManagedHttpsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference">CdnEndpointCustomDomainUserManagedHttpsOutputReference</a>

---

##### `cdnEndpointIdInput`<sup>Optional</sup> <a name="cdnEndpointIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointIdInput"></a>

```typescript
public readonly cdnEndpointIdInput: string;
```

- *Type:* string

---

##### `cdnManagedHttpsInput`<sup>Optional</sup> <a name="cdnManagedHttpsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnManagedHttpsInput"></a>

```typescript
public readonly cdnManagedHttpsInput: CdnEndpointCustomDomainCdnManagedHttps;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnEndpointCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

---

##### `userManagedHttpsInput`<sup>Optional</sup> <a name="userManagedHttpsInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.userManagedHttpsInput"></a>

```typescript
public readonly userManagedHttpsInput: CdnEndpointCustomDomainUserManagedHttps;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---

##### `cdnEndpointId`<sup>Required</sup> <a name="cdnEndpointId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.cdnEndpointId"></a>

```typescript
public readonly cdnEndpointId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnEndpointCustomDomainCdnManagedHttps <a name="CdnEndpointCustomDomainCdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

const cdnEndpointCustomDomainCdnManagedHttps: cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.certificateType">certificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.tlsVersion">tlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}. |

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#certificate_type CdnEndpointCustomDomain#certificate_type}.

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#protocol_type CdnEndpointCustomDomain#protocol_type}.

---

##### `tlsVersion`<sup>Optional</sup> <a name="tlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps.property.tlsVersion"></a>

```typescript
public readonly tlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}.

---

### CdnEndpointCustomDomainConfig <a name="CdnEndpointCustomDomainConfig" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

const cdnEndpointCustomDomainConfig: cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnEndpointId">cdnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnManagedHttps">cdnManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | cdn_managed_https block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.userManagedHttps">userManagedHttps</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | user_managed_https block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnEndpointId`<sup>Required</sup> <a name="cdnEndpointId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnEndpointId"></a>

```typescript
public readonly cdnEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#host_name CdnEndpointCustomDomain#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#name CdnEndpointCustomDomain#name}.

---

##### `cdnManagedHttps`<sup>Optional</sup> <a name="cdnManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.cdnManagedHttps"></a>

```typescript
public readonly cdnManagedHttps: CdnEndpointCustomDomainCdnManagedHttps;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

cdn_managed_https block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#cdn_managed_https CdnEndpointCustomDomain#cdn_managed_https}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#id CdnEndpointCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnEndpointCustomDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#timeouts CdnEndpointCustomDomain#timeouts}

---

##### `userManagedHttps`<sup>Optional</sup> <a name="userManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainConfig.property.userManagedHttps"></a>

```typescript
public readonly userManagedHttps: CdnEndpointCustomDomainUserManagedHttps;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

user_managed_https block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#user_managed_https CdnEndpointCustomDomain#user_managed_https}

---

### CdnEndpointCustomDomainTimeouts <a name="CdnEndpointCustomDomainTimeouts" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

const cdnEndpointCustomDomainTimeouts: cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#create CdnEndpointCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#delete CdnEndpointCustomDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#read CdnEndpointCustomDomain#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#update CdnEndpointCustomDomain#update}.

---

### CdnEndpointCustomDomainUserManagedHttps <a name="CdnEndpointCustomDomainUserManagedHttps" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

const cdnEndpointCustomDomainUserManagedHttps: cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultCertificateId">keyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#key_vault_certificate_id CdnEndpointCustomDomain#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.tlsVersion">tlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}. |

---

##### `keyVaultCertificateId`<sup>Optional</sup> <a name="keyVaultCertificateId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultCertificateId"></a>

```typescript
public readonly keyVaultCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#key_vault_certificate_id CdnEndpointCustomDomain#key_vault_certificate_id}.

---

##### `keyVaultSecretId`<sup>Optional</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.keyVaultSecretId"></a>

```typescript
public readonly keyVaultSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#key_vault_secret_id CdnEndpointCustomDomain#key_vault_secret_id}.

---

##### `tlsVersion`<sup>Optional</sup> <a name="tlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps.property.tlsVersion"></a>

```typescript
public readonly tlsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/resources/cdn_endpoint_custom_domain#tls_version CdnEndpointCustomDomain#tls_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnEndpointCustomDomainCdnManagedHttpsOutputReference <a name="CdnEndpointCustomDomainCdnManagedHttpsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

new cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resetTlsVersion">resetTlsVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTlsVersion` <a name="resetTlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.resetTlsVersion"></a>

```typescript
public resetTlsVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateTypeInput">certificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersionInput">tlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersion">tlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTypeInput`<sup>Optional</sup> <a name="certificateTypeInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateTypeInput"></a>

```typescript
public readonly certificateTypeInput: string;
```

- *Type:* string

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `tlsVersionInput`<sup>Optional</sup> <a name="tlsVersionInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersionInput"></a>

```typescript
public readonly tlsVersionInput: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `tlsVersion`<sup>Required</sup> <a name="tlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.tlsVersion"></a>

```typescript
public readonly tlsVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointCustomDomainCdnManagedHttps;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainCdnManagedHttps">CdnEndpointCustomDomainCdnManagedHttps</a>

---


### CdnEndpointCustomDomainTimeoutsOutputReference <a name="CdnEndpointCustomDomainTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

new cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnEndpointCustomDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainTimeouts">CdnEndpointCustomDomainTimeouts</a>

---


### CdnEndpointCustomDomainUserManagedHttpsOutputReference <a name="CdnEndpointCustomDomainUserManagedHttpsOutputReference" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer"></a>

```typescript
import { cdnEndpointCustomDomain } from '@cdktf/provider-azurerm'

new cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultCertificateId">resetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultSecretId">resetKeyVaultSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetTlsVersion">resetTlsVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVaultCertificateId` <a name="resetKeyVaultCertificateId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultCertificateId"></a>

```typescript
public resetKeyVaultCertificateId(): void
```

##### `resetKeyVaultSecretId` <a name="resetKeyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetKeyVaultSecretId"></a>

```typescript
public resetKeyVaultSecretId(): void
```

##### `resetTlsVersion` <a name="resetTlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.resetTlsVersion"></a>

```typescript
public resetTlsVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateIdInput">keyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretIdInput">keyVaultSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersionInput">tlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateId">keyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretId">keyVaultSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersion">tlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyVaultCertificateIdInput`<sup>Optional</sup> <a name="keyVaultCertificateIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateIdInput"></a>

```typescript
public readonly keyVaultCertificateIdInput: string;
```

- *Type:* string

---

##### `keyVaultSecretIdInput`<sup>Optional</sup> <a name="keyVaultSecretIdInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretIdInput"></a>

```typescript
public readonly keyVaultSecretIdInput: string;
```

- *Type:* string

---

##### `tlsVersionInput`<sup>Optional</sup> <a name="tlsVersionInput" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersionInput"></a>

```typescript
public readonly tlsVersionInput: string;
```

- *Type:* string

---

##### `keyVaultCertificateId`<sup>Required</sup> <a name="keyVaultCertificateId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultCertificateId"></a>

```typescript
public readonly keyVaultCertificateId: string;
```

- *Type:* string

---

##### `keyVaultSecretId`<sup>Required</sup> <a name="keyVaultSecretId" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.keyVaultSecretId"></a>

```typescript
public readonly keyVaultSecretId: string;
```

- *Type:* string

---

##### `tlsVersion`<sup>Required</sup> <a name="tlsVersion" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.tlsVersion"></a>

```typescript
public readonly tlsVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnEndpointCustomDomainUserManagedHttps;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnEndpointCustomDomain.CdnEndpointCustomDomainUserManagedHttps">CdnEndpointCustomDomainUserManagedHttps</a>

---



