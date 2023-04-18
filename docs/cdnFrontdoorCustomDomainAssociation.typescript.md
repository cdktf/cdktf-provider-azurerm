# `azurerm_cdn_frontdoor_custom_domain_association`

Refer to the Terraform Registory for docs: [`azurerm_cdn_frontdoor_custom_domain_association`](https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association).

# `cdnFrontdoorCustomDomainAssociation` Submodule <a name="`cdnFrontdoorCustomDomainAssociation` Submodule" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorCustomDomainAssociation <a name="CdnFrontdoorCustomDomainAssociation" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association azurerm_cdn_frontdoor_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

new cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation(scope: Construct, id: string, config: CdnFrontdoorCustomDomainAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig">CdnFrontdoorCustomDomainAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig">CdnFrontdoorCustomDomainAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnFrontdoorCustomDomainAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isConstruct"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformElement"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformResource"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference">CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorCustomDomainIdInput">cdnFrontdoorCustomDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorRouteIdsInput">cdnFrontdoorRouteIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorCustomDomainId">cdnFrontdoorCustomDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorRouteIds">cdnFrontdoorRouteIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference">CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference</a>

---

##### `cdnFrontdoorCustomDomainIdInput`<sup>Optional</sup> <a name="cdnFrontdoorCustomDomainIdInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorCustomDomainIdInput"></a>

```typescript
public readonly cdnFrontdoorCustomDomainIdInput: string;
```

- *Type:* string

---

##### `cdnFrontdoorRouteIdsInput`<sup>Optional</sup> <a name="cdnFrontdoorRouteIdsInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorRouteIdsInput"></a>

```typescript
public readonly cdnFrontdoorRouteIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CdnFrontdoorCustomDomainAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a> | cdktf.IResolvable

---

##### `cdnFrontdoorCustomDomainId`<sup>Required</sup> <a name="cdnFrontdoorCustomDomainId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorCustomDomainId"></a>

```typescript
public readonly cdnFrontdoorCustomDomainId: string;
```

- *Type:* string

---

##### `cdnFrontdoorRouteIds`<sup>Required</sup> <a name="cdnFrontdoorRouteIds" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.cdnFrontdoorRouteIds"></a>

```typescript
public readonly cdnFrontdoorRouteIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorCustomDomainAssociationConfig <a name="CdnFrontdoorCustomDomainAssociationConfig" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.Initializer"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

const cdnFrontdoorCustomDomainAssociationConfig: cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.cdnFrontdoorCustomDomainId">cdnFrontdoorCustomDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#cdn_frontdoor_custom_domain_id CdnFrontdoorCustomDomainAssociation#cdn_frontdoor_custom_domain_id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.cdnFrontdoorRouteIds">cdnFrontdoorRouteIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#cdn_frontdoor_route_ids CdnFrontdoorCustomDomainAssociation#cdn_frontdoor_route_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#id CdnFrontdoorCustomDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cdnFrontdoorCustomDomainId`<sup>Required</sup> <a name="cdnFrontdoorCustomDomainId" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.cdnFrontdoorCustomDomainId"></a>

```typescript
public readonly cdnFrontdoorCustomDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#cdn_frontdoor_custom_domain_id CdnFrontdoorCustomDomainAssociation#cdn_frontdoor_custom_domain_id}.

---

##### `cdnFrontdoorRouteIds`<sup>Required</sup> <a name="cdnFrontdoorRouteIds" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.cdnFrontdoorRouteIds"></a>

```typescript
public readonly cdnFrontdoorRouteIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#cdn_frontdoor_route_ids CdnFrontdoorCustomDomainAssociation#cdn_frontdoor_route_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#id CdnFrontdoorCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnFrontdoorCustomDomainAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#timeouts CdnFrontdoorCustomDomainAssociation#timeouts}

---

### CdnFrontdoorCustomDomainAssociationTimeouts <a name="CdnFrontdoorCustomDomainAssociationTimeouts" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.Initializer"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

const cdnFrontdoorCustomDomainAssociationTimeouts: cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#create CdnFrontdoorCustomDomainAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#delete CdnFrontdoorCustomDomainAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#read CdnFrontdoorCustomDomainAssociation#read}. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#update CdnFrontdoorCustomDomainAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#create CdnFrontdoorCustomDomainAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#delete CdnFrontdoorCustomDomainAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#read CdnFrontdoorCustomDomainAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_frontdoor_custom_domain_association#update CdnFrontdoorCustomDomainAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference <a name="CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnFrontdoorCustomDomainAssociation } from '@cdktf/provider-azurerm'

new cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnFrontdoorCustomDomainAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.cdnFrontdoorCustomDomainAssociation.CdnFrontdoorCustomDomainAssociationTimeouts">CdnFrontdoorCustomDomainAssociationTimeouts</a> | cdktf.IResolvable

---



