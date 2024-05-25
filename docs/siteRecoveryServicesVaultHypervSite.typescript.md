# `siteRecoveryServicesVaultHypervSite` Submodule <a name="`siteRecoveryServicesVaultHypervSite` Submodule" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryServicesVaultHypervSite <a name="SiteRecoveryServicesVaultHypervSite" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site azurerm_site_recovery_services_vault_hyperv_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

new siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite(scope: Construct, id: string, config: SiteRecoveryServicesVaultHypervSiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig">SiteRecoveryServicesVaultHypervSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig">SiteRecoveryServicesVaultHypervSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteRecoveryServicesVaultHypervSiteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryServicesVaultHypervSite resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SiteRecoveryServicesVaultHypervSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteRecoveryServicesVaultHypervSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteRecoveryServicesVaultHypervSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryServicesVaultHypervSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference">SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference">SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultIdInput"></a>

```typescript
public readonly recoveryVaultIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SiteRecoveryServicesVaultHypervSiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryServicesVaultHypervSiteConfig <a name="SiteRecoveryServicesVaultHypervSiteConfig" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.Initializer"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

const siteRecoveryServicesVaultHypervSiteConfig: siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#name SiteRecoveryServicesVaultHypervSite#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#recovery_vault_id SiteRecoveryServicesVaultHypervSite#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#id SiteRecoveryServicesVaultHypervSite#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#name SiteRecoveryServicesVaultHypervSite#name}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#recovery_vault_id SiteRecoveryServicesVaultHypervSite#recovery_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#id SiteRecoveryServicesVaultHypervSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryServicesVaultHypervSiteTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#timeouts SiteRecoveryServicesVaultHypervSite#timeouts}

---

### SiteRecoveryServicesVaultHypervSiteTimeouts <a name="SiteRecoveryServicesVaultHypervSiteTimeouts" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.Initializer"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

const siteRecoveryServicesVaultHypervSiteTimeouts: siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#create SiteRecoveryServicesVaultHypervSite#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#delete SiteRecoveryServicesVaultHypervSite#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#read SiteRecoveryServicesVaultHypervSite#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#create SiteRecoveryServicesVaultHypervSite#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#delete SiteRecoveryServicesVaultHypervSite#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.105.0/docs/resources/site_recovery_services_vault_hyperv_site#read SiteRecoveryServicesVaultHypervSite#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference <a name="SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteRecoveryServicesVaultHypervSite } from '@cdktf/provider-azurerm'

new siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryServicesVaultHypervSiteTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryServicesVaultHypervSite.SiteRecoveryServicesVaultHypervSiteTimeouts">SiteRecoveryServicesVaultHypervSiteTimeouts</a>

---



