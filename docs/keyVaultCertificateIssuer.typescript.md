# `keyVaultCertificateIssuer` Submodule <a name="`keyVaultCertificateIssuer` Submodule" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultCertificateIssuer <a name="KeyVaultCertificateIssuer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer azurerm_key_vault_certificate_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

new keyVaultCertificateIssuer.KeyVaultCertificateIssuer(scope: Construct, id: string, config: KeyVaultCertificateIssuerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig">KeyVaultCertificateIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig">KeyVaultCertificateIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin">putAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAdmin">resetAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOrgId">resetOrgId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdmin` <a name="putAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin"></a>

```typescript
public putAdmin(value: IResolvable | KeyVaultCertificateIssuerAdmin[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putAdmin.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultCertificateIssuerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetAdmin` <a name="resetAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetAdmin"></a>

```typescript
public resetAdmin(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrgId` <a name="resetOrgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetOrgId"></a>

```typescript
public resetOrgId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KeyVaultCertificateIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultCertificateIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultCertificateIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultCertificateIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.admin">admin</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList">KeyVaultCertificateIssuerAdminList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference">KeyVaultCertificateIssuerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.adminInput">adminInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `admin`<sup>Required</sup> <a name="admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.admin"></a>

```typescript
public readonly admin: KeyVaultCertificateIssuerAdminList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList">KeyVaultCertificateIssuerAdminList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultCertificateIssuerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference">KeyVaultCertificateIssuerTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `adminInput`<sup>Optional</sup> <a name="adminInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.adminInput"></a>

```typescript
public readonly adminInput: IResolvable | KeyVaultCertificateIssuerAdmin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultCertificateIssuerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultCertificateIssuerAdmin <a name="KeyVaultCertificateIssuerAdmin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

const keyVaultCertificateIssuerAdmin: keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.phone">phone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#email_address KeyVaultCertificateIssuer#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#first_name KeyVaultCertificateIssuer#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#last_name KeyVaultCertificateIssuer#last_name}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#phone KeyVaultCertificateIssuer#phone}.

---

### KeyVaultCertificateIssuerConfig <a name="KeyVaultCertificateIssuerConfig" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

const keyVaultCertificateIssuerConfig: keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.providerName">providerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.admin">admin</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]</code> | admin block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.orgId">orgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#key_vault_id KeyVaultCertificateIssuer#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#name KeyVaultCertificateIssuer#name}.

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#provider_name KeyVaultCertificateIssuer#provider_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#account_id KeyVaultCertificateIssuer#account_id}.

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.admin"></a>

```typescript
public readonly admin: IResolvable | KeyVaultCertificateIssuerAdmin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]

admin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#admin KeyVaultCertificateIssuer#admin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#id KeyVaultCertificateIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `orgId`<sup>Optional</sup> <a name="orgId" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#org_id KeyVaultCertificateIssuer#org_id}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#password KeyVaultCertificateIssuer#password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultCertificateIssuerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#timeouts KeyVaultCertificateIssuer#timeouts}

---

### KeyVaultCertificateIssuerTimeouts <a name="KeyVaultCertificateIssuerTimeouts" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

const keyVaultCertificateIssuerTimeouts: keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#create KeyVaultCertificateIssuer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#delete KeyVaultCertificateIssuer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#read KeyVaultCertificateIssuer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/key_vault_certificate_issuer#update KeyVaultCertificateIssuer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultCertificateIssuerAdminList <a name="KeyVaultCertificateIssuerAdminList" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

new keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get"></a>

```typescript
public get(index: number): KeyVaultCertificateIssuerAdminOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultCertificateIssuerAdmin[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>[]

---


### KeyVaultCertificateIssuerAdminOutputReference <a name="KeyVaultCertificateIssuerAdminOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

new keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetPhone">resetPhone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirstName` <a name="resetFirstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetPhone` <a name="resetPhone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.resetPhone"></a>

```typescript
public resetPhone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phoneInput">phoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phone">phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phoneInput"></a>

```typescript
public readonly phoneInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdminOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultCertificateIssuerAdmin;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerAdmin">KeyVaultCertificateIssuerAdmin</a>

---


### KeyVaultCertificateIssuerTimeoutsOutputReference <a name="KeyVaultCertificateIssuerTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultCertificateIssuer } from '@cdktf/provider-azurerm'

new keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultCertificateIssuerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.keyVaultCertificateIssuer.KeyVaultCertificateIssuerTimeouts">KeyVaultCertificateIssuerTimeouts</a>

---



