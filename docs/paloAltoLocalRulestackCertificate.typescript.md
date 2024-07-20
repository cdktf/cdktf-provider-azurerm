# `paloAltoLocalRulestackCertificate` Submodule <a name="`paloAltoLocalRulestackCertificate` Submodule" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoLocalRulestackCertificate <a name="PaloAltoLocalRulestackCertificate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate azurerm_palo_alto_local_rulestack_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

new paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate(scope: Construct, id: string, config: PaloAltoLocalRulestackCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig">PaloAltoLocalRulestackCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig">PaloAltoLocalRulestackCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetAuditComment">resetAuditComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetKeyVaultCertificateId">resetKeyVaultCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetSelfSigned">resetSelfSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: PaloAltoLocalRulestackCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

---

##### `resetAuditComment` <a name="resetAuditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetAuditComment"></a>

```typescript
public resetAuditComment(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyVaultCertificateId` <a name="resetKeyVaultCertificateId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetKeyVaultCertificateId"></a>

```typescript
public resetKeyVaultCertificateId(): void
```

##### `resetSelfSigned` <a name="resetSelfSigned" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetSelfSigned"></a>

```typescript
public resetSelfSigned(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoLocalRulestackCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PaloAltoLocalRulestackCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaloAltoLocalRulestackCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaloAltoLocalRulestackCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoLocalRulestackCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference">PaloAltoLocalRulestackCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditCommentInput">auditCommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateIdInput">keyVaultCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackIdInput">rulestackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSignedInput">selfSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditComment">auditComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateId">keyVaultCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackId">rulestackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSigned">selfSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: PaloAltoLocalRulestackCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference">PaloAltoLocalRulestackCertificateTimeoutsOutputReference</a>

---

##### `auditCommentInput`<sup>Optional</sup> <a name="auditCommentInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditCommentInput"></a>

```typescript
public readonly auditCommentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultCertificateIdInput`<sup>Optional</sup> <a name="keyVaultCertificateIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateIdInput"></a>

```typescript
public readonly keyVaultCertificateIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulestackIdInput`<sup>Optional</sup> <a name="rulestackIdInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackIdInput"></a>

```typescript
public readonly rulestackIdInput: string;
```

- *Type:* string

---

##### `selfSignedInput`<sup>Optional</sup> <a name="selfSignedInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSignedInput"></a>

```typescript
public readonly selfSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PaloAltoLocalRulestackCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

---

##### `auditComment`<sup>Required</sup> <a name="auditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.auditComment"></a>

```typescript
public readonly auditComment: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultCertificateId`<sup>Required</sup> <a name="keyVaultCertificateId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.keyVaultCertificateId"></a>

```typescript
public readonly keyVaultCertificateId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rulestackId`<sup>Required</sup> <a name="rulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.rulestackId"></a>

```typescript
public readonly rulestackId: string;
```

- *Type:* string

---

##### `selfSigned`<sup>Required</sup> <a name="selfSigned" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.selfSigned"></a>

```typescript
public readonly selfSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoLocalRulestackCertificateConfig <a name="PaloAltoLocalRulestackCertificateConfig" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.Initializer"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

const paloAltoLocalRulestackCertificateConfig: paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.rulestackId">rulestackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.auditComment">auditComment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.keyVaultCertificateId">keyVaultCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.selfSigned">selfSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#name PaloAltoLocalRulestackCertificate#name}.

---

##### `rulestackId`<sup>Required</sup> <a name="rulestackId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.rulestackId"></a>

```typescript
public readonly rulestackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#rulestack_id PaloAltoLocalRulestackCertificate#rulestack_id}.

---

##### `auditComment`<sup>Optional</sup> <a name="auditComment" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.auditComment"></a>

```typescript
public readonly auditComment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#audit_comment PaloAltoLocalRulestackCertificate#audit_comment}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#description PaloAltoLocalRulestackCertificate#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#id PaloAltoLocalRulestackCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyVaultCertificateId`<sup>Optional</sup> <a name="keyVaultCertificateId" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.keyVaultCertificateId"></a>

```typescript
public readonly keyVaultCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#key_vault_certificate_id PaloAltoLocalRulestackCertificate#key_vault_certificate_id}.

---

##### `selfSigned`<sup>Optional</sup> <a name="selfSigned" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.selfSigned"></a>

```typescript
public readonly selfSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#self_signed PaloAltoLocalRulestackCertificate#self_signed}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PaloAltoLocalRulestackCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#timeouts PaloAltoLocalRulestackCertificate#timeouts}

---

### PaloAltoLocalRulestackCertificateTimeouts <a name="PaloAltoLocalRulestackCertificateTimeouts" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.Initializer"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

const paloAltoLocalRulestackCertificateTimeouts: paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#create PaloAltoLocalRulestackCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#delete PaloAltoLocalRulestackCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#read PaloAltoLocalRulestackCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/palo_alto_local_rulestack_certificate#update PaloAltoLocalRulestackCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoLocalRulestackCertificateTimeoutsOutputReference <a name="PaloAltoLocalRulestackCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { paloAltoLocalRulestackCertificate } from '@cdktf/provider-azurerm'

new paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PaloAltoLocalRulestackCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.paloAltoLocalRulestackCertificate.PaloAltoLocalRulestackCertificateTimeouts">PaloAltoLocalRulestackCertificateTimeouts</a>

---



