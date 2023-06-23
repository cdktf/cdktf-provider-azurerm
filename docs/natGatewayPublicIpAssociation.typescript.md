# `azurerm_nat_gateway_public_ip_association`

Refer to the Terraform Registory for docs: [`azurerm_nat_gateway_public_ip_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association).

# `natGatewayPublicIpAssociation` Submodule <a name="`natGatewayPublicIpAssociation` Submodule" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NatGatewayPublicIpAssociation <a name="NatGatewayPublicIpAssociation" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association azurerm_nat_gateway_public_ip_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

new natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation(scope: Construct, id: string, config: NatGatewayPublicIpAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig">NatGatewayPublicIpAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig">NatGatewayPublicIpAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NatGatewayPublicIpAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isConstruct"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformElement"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformResource"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference">NatGatewayPublicIpAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.publicIpAddressIdInput">publicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.publicIpAddressId">publicIpAddressId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NatGatewayPublicIpAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference">NatGatewayPublicIpAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.natGatewayIdInput"></a>

```typescript
public readonly natGatewayIdInput: string;
```

- *Type:* string

---

##### `publicIpAddressIdInput`<sup>Optional</sup> <a name="publicIpAddressIdInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.publicIpAddressIdInput"></a>

```typescript
public readonly publicIpAddressIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NatGatewayPublicIpAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.publicIpAddressId"></a>

```typescript
public readonly publicIpAddressId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NatGatewayPublicIpAssociationConfig <a name="NatGatewayPublicIpAssociationConfig" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.Initializer"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

const natGatewayPublicIpAssociationConfig: natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#nat_gateway_id NatGatewayPublicIpAssociation#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.publicIpAddressId">publicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#public_ip_address_id NatGatewayPublicIpAssociation#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#id NatGatewayPublicIpAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#nat_gateway_id NatGatewayPublicIpAssociation#nat_gateway_id}.

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.publicIpAddressId"></a>

```typescript
public readonly publicIpAddressId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#public_ip_address_id NatGatewayPublicIpAssociation#public_ip_address_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#id NatGatewayPublicIpAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NatGatewayPublicIpAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#timeouts NatGatewayPublicIpAssociation#timeouts}

---

### NatGatewayPublicIpAssociationTimeouts <a name="NatGatewayPublicIpAssociationTimeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.Initializer"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

const natGatewayPublicIpAssociationTimeouts: natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#create NatGatewayPublicIpAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#delete NatGatewayPublicIpAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#read NatGatewayPublicIpAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#create NatGatewayPublicIpAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#delete NatGatewayPublicIpAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/nat_gateway_public_ip_association#read NatGatewayPublicIpAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NatGatewayPublicIpAssociationTimeoutsOutputReference <a name="NatGatewayPublicIpAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { natGatewayPublicIpAssociation } from '@cdktf/provider-azurerm'

new natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NatGatewayPublicIpAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.natGatewayPublicIpAssociation.NatGatewayPublicIpAssociationTimeouts">NatGatewayPublicIpAssociationTimeouts</a>

---



